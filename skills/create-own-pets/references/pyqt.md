# PyQt / PySide 技术栈：透明置顶桌宠实现要点

> 适用：用户选 Python 生态（PyQt5 / PyQt6 / PySide6）。

## 1. 窗口配置（透明置顶核心）

```python
from PySide6.QtWidgets import QWidget, QLabel
from PySide6.QtCore import Qt
from PySide6.QtGui import QPixmap

class PetWindow(QWidget):
    def __init__(self):
        super().__init__()
        # 无边框 + 置顶 + 工具窗（不进任务栏）
        self.setWindowFlags(
            Qt.WindowType.FramelessWindowHint
            | Qt.WindowType.WindowStaysOnTopHint
            | Qt.WindowType.Tool
        )
        self.setAttribute(Qt.WidgetAttribute.WA_TranslucentBackground)  # 背景透明
        self.setFixedSize(240, 380)
        self.label = QLabel(self)
        self.label.setPixmap(QPixmap("images/front.png"))
        # 窗口右上角定位：QScreen.availableGeometry()
```

## 2. 拖拽移动

用鼠标事件计算全局位移，`move()` 窗口（Qt 里 `event.globalPosition().toPoint()`）：

```python
def mousePressEvent(self, e):
    self._drag = e.globalPosition().toPoint() - self.frameGeometry().topLeft()
    # 切"起身"贴图
def mouseMoveEvent(self, e):
    if self._drag is not None:
        self.move(e.globalPosition().toPoint() - self._drag)
        # 按位移方向切换贴图：dx/dy -> left/right/front...
def mouseReleaseEvent(self, e):
    self._drag = None
```

## 3. 动画

- 呼吸/浮动/跳跃：`QTimer`（~16ms）或 `QPropertyAnimation` + `QGraphicsOpacityEffect`/`setTransform`。
- 帧动画：`QTimer` 逐帧换 `QPixmap`，或 `QMovie`。
- 屏幕边缘吸附（可选）：读取 `screen.availableGeometry()`。

## 4. 置顶级别

`WindowStaysOnTopHint` 为常规置顶；若需更高层级，Linux 下用 `_NET_WM_STATE_ABOVE`（见 `packaging-linux.md`）。

## 5. 相关

- 打包：`packaging-windows.md`（PyInstaller）/ `packaging-linux.md`
- 资产/动画通用流程：`SKILL.md` 第 4、5 节

> AI生成
