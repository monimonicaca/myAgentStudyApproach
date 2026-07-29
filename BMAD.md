# 前言

流程与敏捷开发强相关

在每一个阶段给AI一个“人设”，让AI变成这个阶段的专业人士然后产出相应的文档或者代码

在开启一个相应的专业agent之前要将角色卡喂给LLM？--》可以根据项目调节agent人格

通过产出文档来产出上下文，让agent又记忆？--》每次都读的话是否会超出上下文窗口？--》token花销很大

# 安装

需要安装Node.js，并且版本至少是v20.12+，如果想要更好的性能，还需要安装pythan，这里可以直接去官方仓库看<https://github.com/bmad-code-org/BMAD-METHOD>

接着运行npx bmad-method install，这里需要在项目文件夹的cmd或者powershell中运行。

如果有东西没有安装，在终端会有提示，这里需要自行安装uv，cli不会引导你安装。\
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABCcAAAByCAYAAABgObvzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAADiSSURBVHhe7Z0/TzrPE8fHX/19BgQsLPQpECg+WkpPgSa0aE+hCRUJFPRKawIU9FiqBYSnoIWFEB6Hv529O7iDO7i9u70/8n4lRMXj2NudmZ2d3Z09+e+//34JAAAAAAAAAAAAICH+Z/4EAAAAAAAAAAAASAQEJwAAAAAAAAAAAJAoCE4AAAAAAAAAAAAgURCcAAAAAAAAAAAAQKIgOAEAAAAAAAAAAIBEQXACAAAAAAAAAAAAiYLgBAAAAAAAAAAAABIFwQkAAAAAAAAAAAAkCoITAAAAAAAAAAAASBQEJwAAAAAAAAAAAJAoCE4AAAAAAAAAAAAgURCcAAAAAAAAAAAAQKIgOAEAAAAAAAAAAIBEQXACAAAAAAAAAAAAiYLgBAAAAAAAAACAHU4uKtT9+KCPYZfuL07MdwHQA4ITAAAAAAAAAAB2OStTkX/milStX8u3ANAFghMgNCcXF3RxUaH77j1VThBRBeDkhHXigir3XbqvQCf+Ity+FxloX9hnECdpkzfIPwDh+Z08UKM3ppX4fbX8Nt4Ea7LiD2SFk//+++/X/B3EDC+TuqvXqFrMme+saD5u08PTp/l3+jk5qVBnUKNijp9hTr3LR5r8Zl+kTipdem/KOLELK1rNR9R+fKVPj2eV9fLepOK8R/8eJua7Ti7uh9SvWm3vzmrcoBshD9vXznuX9DAxvnvf/44Vrv+7QZOquRWNG7f09BlvfXAn1aoWSWrFEbZH0vWvG7YPg5poX9HAaW7fNNnnv9Dfgf2kzR/QWR7Ic3JkrX/Z7+s5/Ume2Lgb9MWz8f/cZdbhn7r4mFLu9/ifnv7tSsjwbEQvz+6+rVW2/CjZPi+sfx41WfEHsgRWTnjAyt3tVsy/oufk4p4G/Sblp2369++ffDXGRMVqn7oZirz9/k7o4eaGLntz852/AUeJLy97omsQsIE324hfl40RLQpN6r93vGdizk+pwD+LZddr2MhflXK0GveocXkpvqtBYw5J276rId7I5c/k9Z9PVh1zZ+w0fvv+d7wkG9n/fHqgW0t+jpJsz6wcsv9sH25v09++abHPaevvdPfvuklr+dPmD+gqz1/x37JLtvoX6aOZ/gBPOFkyw35fY7wQgiP8ycEdXQhf8ff3k55uDP9P/IPKLjsorsvGwFzey23y64D/afdvV3afczQjKnFZhG/rklfi/LpOpUUvcR8ztH+uyF/xB7IEghNeWMqtiet6lXJCqR4mmyj719uM5vMxvbyab4BUsL2E7fdzQo/SEBWp2XHfe3d+VaLFmJfAFej03HzTwRnlaUxtjwg18/XcpnHhVHZYQA2rg//37+bPzdpngczXv2b7f2ykrr/LevtCPhMF/luy/JX+nZ+DJzLaHIjIVcktlUNhy4Hkia3TA8p/2P+0YfNvPydPhm+bE75tywiWWMjVoOWpXJGQJoL458rA3sYOghMesHJ7LcKKil2leqKHh6fYliKB4PCMzJTDpC6RaWNVxIKmz280W+WodOXSOwhjR7O3vW3NHZfwd8jt4wAAfcRh/4+NNPV3WW9fyGfywH8DUfH1szB/s7PgXRbr1bNrzq+otEf5ffmfe2Df9pFXGuWq1LrbfJaDKDcPk0zI9z7/PAiwt/FzMDhxUem6LlNjBeAEQ39xVveick+tA7kAwuAn8hmUY2yvpPhe8rI7N84ov5jS5PeTuM/Z6VwE0pHxsTf18+kp1TMDaZY3ToRWqVyYfwFVuA0vQhwZltX6123/jw2d/V0Qst6+kM9kSZs86wT9e5IsaTYTPub2APssTzQe79lCcNj/PMjrVN4/V7rK7JjB2z9XA/Y2GTyDE5zg4+Pjg/pbSUekURp+0Pt7n6o2A8178IZ8Bq71Gm4MFyeDWb//0Q0UyeLkQ/ddYSiHQ2ksjb839x3uMZRctq4o87oMfE6vi1GzytlvVo0oWbG5+Yx4uRlpFSpd4z6y7sQX5Kp9x/2H9+6G1k/51dsrTH1WHOUZdisU5eS+r+cNUf6oOMt7GKzrMhXMWZVXDt9GFL1NE2mzDxbGvYY05DL0+9QsH+6Yd+RNfL4rZGt4H92ebkNn/OuXXZa97JXFzvVcfg9bwvjRL7ZV3Iatq3Pxu3XvoTzfnJd3Gm25+z1+6z+M/rLDzPdfXytkqSLrd1PGIISx/zrbVxWjLJtyH7LPusoTpL9j+8Hy5rQVLCPe5dkpv4f8B21fP/oSBr/2J0j5/danUYf6/QHl8nA9sF6Z/YX1eeOz7u2sUh4VtPpvIZ7XD6r31+1Pql5vkeX+ZR9GDok5Tbd2TPzIFRXOrRl87eLnx/zLhUj8z2+SY/tcngKENhzE4V+5YffPZc6I9ffzy/AzLXm2l81q3/j8AQX7EECes4pncMKRcMSGtdfLSNaygWeCb62kfqsxNW6f18t/1gn75pz8L2C25K9v+pkuqcDpUE/vqNMqE70YyYguGz1aFKvUd9lfxEb2vV8iGm2S0DRGnPNlN3ERl9O6RuZP2kq0EjYJzOTBuI+V/NCeGIdffCrDNn7Lr9peYeqTE0FZ5eFnaS/L1Ko5O7Gg+G6vgOWPCjZ2Rn/CEWqnXJyfFmj29mX88b30t+8vY6TOPpgYOnxDN6IMfnKgcccwEPK2tMtbb0aFYpH75WgQ8jkQ8jlt367lc1YQ8mkmwLJjlKdJpeVIJkr1lH+T9fW0uf6yIcovHGfXwZ9P/Xp9NNuqVKeymfStN89RtTWgOk2pLb7LSABXdzg+vus/hP3pN4V+2ezPaFGlZp/rt0fj+Yx+TNVTJbD9X7fvpvyyfd3Kr9i+qqjaZ53lUe3v2KZ2xKCnKWSZ5cu6jpO0FSKQ/yDt67s/CohRfn/2R7X8SvUZgz+gXp4pTcVrYQwNBOd0N2jRqbBHhkzlduyPqvyroNN/C/q8vlG8v3Z/MqC8Zbl/cUMGh8QguFmY07jh4vtI/zFH1uIHvv5UXLsdxLAThf/J7ey600QRFfsWJdv+uUyMy98t5XZzAopdnjkxaONyc/JLLP6Akn1Ql+csE2nOCW7o55FoRZdoGyvM+OU18H4lvvfr648wrMIhFm35cvsohMjoDDgBygsL3VbyQNkZNotCpm6FIG06jk/OrCqkrdgcaImCRoXO8oepT3siKL6PPJmA2z0kKs8bpPxRwcu8OoMmiZJSbys5EHcevN9v3YF9Bdv3540YIPbfN1FW8+V9rFJ60GkfgsKJzWjcpieHvD3RrRh5ryKSn2IpTyMhnxOz02P5NOrBmQCLZeeuxeXh42M3eztZ/jlhVrHpzD5tXZ9bjZ3HZkmZE7ffWpIZxJ7kFtP1tcYyydn6mDH3fbL+CGZ/xPOKQcbK1l7yPo9G8qvy2Ss9PTyFCm4Fgcvflu27Kf8bN4Bb+RXaVxVV+6y7PMpcl0UrrnbswNerIc9uieFU5F8Vnf2vhVb7o1CfwfRR0R9QLM9kMpGvF/6n4KpTZ0WTdcX/f5vNRdu8rPVduTyaUZGfIM+rQhz3V5Ef1etVCXL/uPoX+4obXoHSFP7iuP0iyudyX9OWFa0jOzjfBC09zyrhZ4jW/ww3sRaHf7XNPv/863kk3t19Jt4pM4vI//TvD6jZB536kkaiT4gp9yo5j7/hRqjnZ2QF88IyH21mXS2ko7w16Dm/q0kBdY0yvr7ISHF0g8boiav8fuvT7lzoIOjz+i5/QLaXb/abJSosvGb5rf1+xvtsVIyiRFESxjgu1IqyWq+0HN12kBjsgwo84PbKCdIe7Vk6qcBq5uLwmXs6HQMumehqtZn1sMGZ4MVw0Xms2HVdLi/eln8pc8LRHI+cCVeD6Nd20jcd+NdfoVvieRc7U1fGEtTtwWtc+C6/avuqomqfdZdHFSGDvd7Ivx1QlH9V4uh/tdof1fo08S3PqvIWsDySXJXyU3bIN+XioIPdqdftn6gSSn78PG8YNN7fvz03UL1eFf/3j6d/2V5x0xgtqdQXPqa51cbJl7GCwRp4ylH0m3jXC93+pxpx+Fcq/rmRKNOpd7y6o0Yj9+BQAPzKW1rHO2kh8uCElSV1HeljRKdRWIZzFFQxIojsuewuu2fWSpvShC9pLD/PbnMG4SiXtVmkub22OxO5rNArazE7SFt705q8qOEP5p0IQlrsg4WMpBe4vYbUvee9pZs2+pxEk5l619lhDIfH3nEbGaE99OvLiJrbHSRDH907t4lwNO2zFVm3hwZeTqKXU5kuVNtXFVX7rLs8qrAM8szuF53L2a9u19xbzvvbRftuoyL/qsSlLzrtj2p9qqIqb6HKszp8RKdO/0SV0PLj43lDofv+mSSZ/mW9kmDrdAwLmTfCHHiyjO8tR+T+Zzh9isO/UvLPBVyfdr3jfnDhGiHQx9/wx/QS/coJgZGEpbZeknJdtu2BAuAPw53H9soGY1XD38s7EZQ02QcOljzeNuQ+SCrx3tJ3OpSATy9Far67bNt552WKxw132LwdJldtrRNGcSd/zTMQmXG209a+6SoPJ1sdiMFqq5an5bRN7fbleo//X0S3/UlbfR5b+4LskGj/Ym1Fc8spIvNG8Cq2czGgXbjPtJtE5X/yc8tY38p7C4kf0udfCXjVqrml1ggS7K9TkAxaghOy8clYkhL1khkA0opl6HYizTZ9AIKU2Qd2Snj24uGGkws1qLcQXXmzT5zlPX44WdPuth3r5ZZ07aj4FrIzX1C+Zizl5FnXWn5GvfbuUsd0krb2TU95ODt6v1qkRa9BNzfGyofPI/AbdNmftNXnsbYvyBAJ9S/WTLlrEGG9iu2K8ir5JiwC+Z/GahFa/IR+7nT5V0bAhHM0yNW7vLXRtg0GpActwQlr6TYvSblLYMkMwwrhloTEwooMrmbJLCc/RBrLL/c1aVoBkPX2kngaut0l/MdMGuwDw7kuulsd5O/nJ00ebuQyS/vqjugxOn97TgdV/Tp0PT9fpWKU/y/oF5fxrlUjmj5KR2c9gOYkZRkY5Oi0n0zU8hMn3LbGMtdNMsNDqMi/KnHoi077E6Q+VVGRn7SVRzd/wp85MrhNkupfLHlwY+0vVatU2CcvUfqfMn+LUNcQvlmy/tV+ZE6lYhnj0xTjKzixvQdr3dHswdgnVaVqNbklM1IAzeU7O8hkWu7JwLy44D1TLoKki6DlD9JevvCIwEqjHsFRXVG3V+xwsiKXBIJrQxRz3gnZOfD5yUPjTGddZNU+yE674NFBmrMVUeC6b192/lvyfCBJGi+JdpT1wIzI+V2ZTm3imHX9Yj3i8UexaWxD4PP6h3z2N9vlGJaJhrb/qu2riqp91l0eJcyZugPws1xYZVKU/0Nst69+fYnW/jjLH6A+VVGSt7SVRz+Z92dMtPmTKSPR/kUmJxY/V+6JwY2Tsg7kvYjI/zy5ME6RCJ+XJB7/KhByG00xlP8Z1h/4K/ZBF3uDE5uIXX2dyOTkQhj6Tp3yCw7FVanVuXMkOVkjOwqBR8KPOJAZYXn5TnPg2OPEyZgG8giXtudycmNffHmtWLz8vJ7/ifRZDkUyVcsfqr18wPfn5VA7e/I6LXF/bu0i1TqdwA5tmPZKA9fyYOV9GPsGY4MHwNzh5US7uCRaCkvW7YMBH806WMszI2Va7jON4gQRUQ+llqs8yyPLHPr7Sc/tMYkC0fC+so6oc3kq3SG1yHncGNf/Y0+4436vz7h+Md/LBc3HPer1ejQajWjGb5ZKVGvyMtxhZINpHfZftX1VUbXPusuzzb7+zrIlQjidssmO8qBFJfG78fkzujIHn6ryb8dP+8ajL8Hsz6HyB6lPVVTkLW3liYKo/be0YbWZLn8yjcTVv9iRwQA+EplPmnFsH8mbP3ksz0N5j5MdTAL7n6Ycs65cVLo06DeF7ZlT7zaKrSy6/atgrAM2Pv1PLf7AH/DHdHLy33//7X16FqQ7YdyrcpQjYKFtP9L31YBa+RmNpj/0/ep+Piw7COUpn+EavoJPhNK8iwZbM+/Rv4eJ/LXSNTPSmsx7l47v5Mau16rGQI0RzzAeCcflwPJCLn/T/NBqzmeph1NWFuhBn42QC7bn2Ual/H7b6+u6E6I+u9SqFSnHX7ESBnXUpmeq06BGNBtN6e1byEMIpfLzvGHkwQ/G/lh7S/HebLejQ806H9gyjm+15fa9OLuwfS/37nftlnn7mez38Pofr5ywznseCxnQYejSYh8s3OrSYrverbLnOYZfKAh5sz63Eo8xC6/vXP8dosfHb9EZ16lWFTrD/xA6Mxc647W8mZ2Vu3ptU6eiPNxR7bu+0xKdva3887G43iNfwCH92pZnrre2GOqt61XI9+W0bNO/jW74rf8g+ivvnR952kn5OfK2o6rss/9h7I9q+6qiap91lUe1v2O5c+iJgOt99PJMr2cd6bDl2L7wGfI2vVSVfwu//XtQ/+EQYe3PofKr1OdrDP6AUnnO7wL5Sowu/0Sn/xb03n4Jen9LRqP2Jx8pmLxltX/Z/k4nhr6zHljbRzbXC/lt3NLz17Xw5U7p5fbZpa7HNC5UlfxPR39uYyX0ZSH05eX1K5Tvw4S1b/vYlYOND+IXXhlY/3l02LJ96PIH0jDeSSMHgxMAAABA0hxyDvn/taUzAAUAAAAcAv3L8WAETq7oLUSABOhFz2kdAAAAQITw0spVselYws+wo1G551mN496jCQAAIBjoX/42Rg42PsZUtO11nfJLJKNNM1g5AQAAIBNYWxBKxZxtifLuslgAAABABfQvfxe5/Y/zaYjfV/Me3XiskAHpAMEJAAAAAAAAAAAAJAq2dQAAAAAAAAAAACBREJzIMLxMqdt17o/jTNXD4Yc89sh+PA0Ax4Bf+ed9pPfdbqhzqgEAAAAAAADRgW0dGcU4JrJM061j1Sz4POrrqzqV6eXgkWoA/DX8yP8hHQIAAAAAAADEB4ITGUQegzNoEbVv6QkJejIDn5N8+oI284s8m73+ozVxEZ8fPagthSod75FSHMg5pzO6qp/Sz+MzAjUACC6EXgiloKufR3r6A+fGAwAASA88ljs/59+E/3VVplJ+utffVb0+y2R2WwfPet6by7fvL45rafZ1p0+lWRuD3AzBgYnaMjttlgb9+v18ovayRsNuxXwnen4nDzRaVKl1Jy3+0SFXj7Ra1O83qVrMm++G55jtsw501yfaywkHLVutPvWrRYpOK6ID7QXCwtuC74Vf8vHBcmTIUvceW4HTwMW9vV22X0PpE1nbueUWVWkL+OW+VZXt2frzLv4U25Oux/8Yx+ftLz6ac+vo1Sg4Fvt2flcX/UxLvIT/JfqazQkx7qhen2UynHPi2/ypB6msGgdFQeHZ5FpxTqNnnLecFazAxE2mttekQ78+n260ByheX8ZE1dZROvm/vxN6uLmhy97cfCcq1OQnrfY2PejVR/33TxeH5I2Dlre3PYpaK6LjOP2ftJD1+pGrEvtNyk/b9O/fP/lqiG6wWO1Tt3J8/WDaYL/n8tKwP6txY91Gl5cN0U4L0VBN6g/uZFDg9/eTnm64/Vbi6iKVr+UtHFyX+QBN815uM+3np1Tgn8Wya3CD7eG6PPPeRmZGM6ISl6VDlUj9p3T1R7r0/fPpgW6E/3Uj2s+PC6Z6fZbJbHDCUsh//270zEZbypoyrutVovELll5nBI6AZy8wkS79WgcoNM3q8AqN0TxH1bpLrw4CoSw/KbW3aUG3PmrX97SRcXk7Vv8nNWS8ftiPzIlB5sNk45d8vc1oPh/Ty6v5BkgdrPc8QG1zICJXJTeXpXDqXAXKKytODwjr+VWJFuMxrYRUb318l+UmcPA5eaJHDuLmitRsGcGSKEhdfwR7GDs4rcMDVta0LZkxVk2saPaGVRNZgAMTLcpeYCIOVPVLBihEbeoKULxO556zBkA/abS34O8CedsP6mc/f6F+VrZBJsNB+oeHp6PNvZQlvn4W5m92FrTimEX+zPzb5PyKSnuElYMXV6UFTZ/faLbKUelKbYsrr7585Gn83N/dHgt7GD+ZDk5wIreKhuMyLyr31KqmTxQNBVnQT4SxCT560W0Zn9zH1r2PfC9Z1KS1/H8hMJE2/dIaoHid0txjSSQIhl/5Sau9TRu69NFC9/3Twl+Rt2Pzf9JC1uvHz0z6sZJtf3hJs9lqd5LlLE80Hu/ZonZG+cWUJr+fxDGPneCGH6T/JD5buoqsjtLSH8EeJoOv0zp4xr7TqlJx3T4rms8XVFhOxeBrd/8SJ9q5q9eouv6AuH7cdhzpZ1xTlsmmCoWCGHTPqHH7TF90TtedFjXlZ3c/x4O+flX8Z5WjHF/C+59c9lDJMtfF3cW9aXRLj993tmdY0Wo+ovbjqyNKbNx7/ZA7zHuX9OCStVu1foJS6X5QszCW9RQ2us0Jbt6bxj40+3OxEb4b9ElWw2rzXcYexeomemj7n7Pe5tS7VD+aUVUe1Mtv3n8tD9cOGV3Nx0IeojmxQQYm8iPfWXShXwZe+rWNjhwea7lZuD9vXHA5uH1qoiLXNbUS7TQS7WRbghtGnvmznVZzLW+8h7Q9LVO/SYF0145f+WGikgc3VOUzqL4wO/q7mtN49EJPjvYKZj9V6tNCxZ5Ecn/X5w0jn/7Lr4KqvPE+4867VApZ/k6rJsrkp/xb9tmlfoLit72C1L9q/Vj4eV5V/ZIyEJv++muvNNVPEKT/aLhMrnA+Arc+VUnfxe86ym/p4qb4hp18Ffdf+3uSFY0bzhPRfJVf0Z+MA+uZCy7tYrTldl9xT2c/eWo2C4464GvL0x6Jf7jei599cPoi3zfqwd0P2FeeTT0F8/8tdNo3C7/9SxB99+u/uSHblA73vxZ+r9fVn+rm4MoJfrBBv0TL0SYpS6M3o0KxSDm2RFsY1zepRCNqXF7K6y8b4vpq3znj+fVNP9MpTcVrsW5GNjQtOp22ZeKXsRDQYrXuiALy7CnvQzqcEOSNpkthKFnCT0XHVieatq3yjGhW2CSUsTDubTyjvDcrhvk3v9w7HrX6CQoLvYx2L34iMY72BDd2rL1eRnKdDbzk71a2ifhjy0hzvcmEeqK+GkENk6I8qJbfuP9yIw+tMtGLkQzqstGjRbFK/U74aXM2aKqBCeiXt365MXm4oVE+2hUULDeuKyVjxOj8+6LDEY632bb84qRTheZWorKA8iwdEY5CmPLGctBelqlV2+O1KuBffqKTB3cU5TOgvkhnTuivVZ/8Eren0lZ7BbWfKvXJqNoT5fv7fN7A8qmxPw0sb6L8A1H+aXtT/llhX/mFfV5u7LNr/QTEd3sFqP8g9eP7eZX1Kyb9VWivdNWPOpMHo5zGvdgMbXSMX66BCSV911d+mbiZv1sa0M0A2O7vcZC9cbkVmPBrn1X9yYTgcUBF+JjNwpzGDRdf+3sphp45shY/GOOGOU335BE5FwOL9VZx+XkfeSe2iMp/0mnfGJX+RVXflfy3mFB53rRxMDhhJGBsO6KMnATltjGmVeHUMfiQ0bNWlXLC+XLMmn7xXibnkh8W5slkIl8v/E/BFfdAbWFcxHfx/99mcyEPwZI//n5+0uszG0qiorBNL4/PNDGN1u/nhJ7bovweCWVUUKmfrMNt8jwSWiqkenvhFxu48YtzplwF7fIgPv/6+rORh9tH0YkZbcby8MKdT8j24o6wX5pJ2fcL9CsYr49tmpWSMfjauC5TkWd+tvTo69VoX3uiqyDyLDvPpuiURCdrRfH5Ppxg65b1+g+hKp9B9MWqz3nvdl2fzCef9CC8mWJz4DgBhu+hy35a6OyPVJ43iHwyaexPufxtUf6JrfxvhkJu6Zdhn8WoQc5IWW3J9cMJ7IrNTuCBpSpB618FledV1a949Fdve+msnzhQ1fc4yv/1PKK5y+CZdy7Mtuynqn1OK7lqf3105zsPfksLYSJfHEGYNaYvWLT2p3K+CVp6nn3BMsr5JtZbxeXn1fNObFAPbASB5Sl1/YuC/xYXWR6fHgxOfC9Xwpfa3YPEM0Ht0Y/5l8l1XS5/mo+cy2lYkH6EYRqP3hzvOxAdTX7KArb5PzvNdqMSlO3ySLaVOCBK9fMXcNmbz51APT+jSPN0xiwPMsGQy6BBBY6+N2YlarlEbL2AfgWDl86VZg1Rfo/nzSKvL9TrjZT1yLc82zrPYyKQfPrQl/O7mqhPj1kp0ZY8U7jj5Gm2nzr7o0DPK1Cxt2nsT32XXyaec09YzSchiOFoIjltVOpfiTDPq9Af6dJf7e0VU/3oIqi+SzSVn1dQTOfO7+XZ4RqNHN/FhCp/ithe4dIYLanU79PH0C0HxpexgsEaeMqozZt41wsr34RRd9KXlKYhlGWIldT0LwH9N51keXx6MDghI5WFJn18DKl7f+84y/ZzsokGMzz7I0TF1RhMhGGyR292WMV7hJGlhGFnD1TqJwxRlTcsRuew5RSIQU9huWdgHISY5SEqeCmYPPbS55nI0C91dOWckNWbIFxnPPPE+3Q5CVNXPOdwaMyW7Nn66BtDfqJNqJtVDsrnAX0xZpw4Urhx7OxY999OEKbbfurqj4I+rypx9ac62Juw+suY5Uti9kwXoZ43ZH8UVn8Z3e2VZP2EJbS+ayw/n6xl/16u58WWUxSXvUqC9cx3zv10DHnymDkw5z5/sa/D5wmLIttbY2UGv5q8wzPwyWXp9i909i8sUzr9tyBkuT89GJyQx8TcNuQ+FSpVqdl/p4+heNAjyOrthzjrh6NgbtHAuDGOXaytl8Rdl2171sAmQOEjJwL0Sw3O6RF1YMLgjPLSl0nQIxRc3HdpIDqzVi1Py2mb2u3L9R5h8DfQaT+zbk+ybw+L1HwXZbY5+/x6f7cn8/tLZP15dZf/2OQhBnj1mRiY85YeIwixcF8d8ZcxVw7l3HJ4yLwRvCrn/GDdyO2EjU1+BH7J/EeK2zO4HeTcx8p7C0ka0N2/pM1/y3J/ejA4wXBEiKN1DzecbKRBvYUQ3Wbf9+zwXyeu+jGWAsazp2svcmmysSTOa0ndsSMDFD6PvYR++UMmG9V1PKu55WHr6PdYMbJDF2nRa9DNjbES5hN69ffQbD+zbk+yXX5O1ud09u0vLbYrUbL+vLrLf2zyoB8ecHFOAbn6jLfO2LYlHAtsI+XKIbfxwHpVzhWJIbL/fBMWtv7JP8bkTlQJ+3Wiq39Jq/+W1f50b3CC98J2tx6AExVxtnxeVmSf/WHkPp89g2e+X6WyFeVLiHWkL4QyqdZPaGS0NPl9ctw5yJVjpSu6c1lSBwwOBSigX/7RGpgQXJeLwo9MLshmOAq8dGOTrDJqDsnPMRFWPrnDd0uKaGHdfzXb3a6hy37q7I/CPK9fYu9PI+bY9CvJ542if9Fd/izLQxz6HgY5UVcse9rPtJc/LGv5d2Hdv1SrVNj3fJ6BnW8yFmkrrNGWkzvCfUnxWEBn/8Ltodt/UyXr/emBlRNCSAseD2BG5xwciLid35XpNIGZSdd9fVZyQQVl4nOEnUuoFOsnJGxwOdu761KuEGzXz1rR9mDsa6tStZr8krog5Y8LDlB4H3sJ/bKzq18GMjDBx7NqCkywES8XDyeK5LO1u7wsd9jVYNTNmYcDsGxfBP1uD/nhe95FdJRolHjJgypRyec20kE2lxfvIO/vngyP0WM/9fZHYZ7XH/H2p9uElrcDSfZ4yW/0diM+duonpufVpb9Rlz+p+tGFfn0PgZyoK+61n0HL79eflIO/oeEPRNFPKSGTrYqfK/dEynILuGBvvglOlumyVHQd2PGZd4L9Ij4VJek8KYeJtn9x6nsM/psyyfanYfGxrSNH1f6A7m17VLiCrzkT7pZiyP0tPR4898VgrLKOWPL1nMSuRR7H3+imVKeurTycrGQglInPRfbK9m/sCy6vG5aX39bzPy5RRv/1EwV8IkRvXqSaSyIcVTYR1vo6UcrJhRiodOqUX3DotEqtzp0jicoaOdAReCQcioNQ5Y8RjlR6ByigX4yXfq0DEw8T853oue40qehn1cSZMTtAOeEUuXo8wbFkmYpNx37AC+74By0qid+NmYwzuvJwdg/B38HLYXPV1lrepKx1WkJf5JdTrdNJxGH2b28DEEA+/SAzXvPy4ubA2Wbm/ee9trdMabOf+vqjUM/rm3j6Ux3yJicP2mMSD5Au+xwAP/UT2/Pq0t8Q5U9V/QTk0Mx4PPoejPUAeo/9VC2/sj/JqwV4QCr8gSj8cb/IYAAfKU8rGrftJ1XkzZ889uShp8dJJSZytehejLwVO5hyw3J8UenSoC/8p9Wcercup+qkjmD9yyF9j8N/C0a849MoOfnvv/88pYkf4o4dV46xFApCEa3Q0Ep0DDNqP7oLo6E84uFt18/HbXqwzXxy4w76rGAuiE7nn8dgxNjX4x6i4iN37LOrHNnsvDeJepeiG+hQSxgk45OiPMIwHVp+wx1IU1of8Yn5eOd5g9ZPWIznqtGycRu6c7CeoWo+pyg49dqP9H01EIPCGY2mP/T96n7+PtdPecpnSId/xqDy4Lf8X9cdehftv8Z2z0rXzFBsMhfyEsUzbcP1dfqyaTPo1wH94meo/2gNTJxw51pbUttnx8qOTatpnV2///lUYXm4vqtTrWrVo1Evo5dnej3rSIcqJ52AR3oNIc/sULRq4l78JSvh4Iza9Ex1UQ9Es9GU3r6Fvge0Kyrys80heVBFRT6D6gvDMlGvVYU+mm+INhqPxMDDh/wfsp9q+qhuT4K0l5/nZb1Slc+g9jAo++QtSPkt2D7f1WubPsmnPfSD3/YKU34Lv/ro53mD6Fdc+hu0vZKuH1WCfocvfY+h/NvwypP6z6Or7NpRsc9+/UluZymfA05sKu4nrokyULOto04Me8h+wcT8zs31oj8X44Lnr2tRtlN6EX7Nru87pnGhKlceGX8722fbxrBd4e3JbnZnJfyHhfAfXl6/IrHNOu1b2P7lkL6r+G9WUGNvO7vojcr1cfenUbM3OJF17J3bIQOWNYwBapmmNkEHIE6yrl+Gc6GmQ9LgD/qUH/09m/LX+Mv2H4C/DvQXeGEMvK7oLeUDLABAMHyd1pF53PYsZpzfzwk9tpdU7lyvlwsCkAgZ1C/DuSnTtK0W3Du/rlNpEW45MYiZP2j/ATgaoL9AwMGqrjwGUfi7oh/OL7OZzBIAcJg/u3JiZ9kPzal3iVUGAETBMeoXLyNt5afUfnTf5gTSA+w/ANkF+gu2kauFOb+B+J3zjejc7gkASJY/va0DAAAAAAAAAAAA6ec4tnUAAAAAAAAAAAAgtSA4AQAAAAAAAAAAgERBcAIAAAAAAAAAAACJguBEirm4uJBJ+O45OzFINXz6A7dXBe0FAHBB2vNKl7r3F+Y74JjJSv9+wuW8qNB9954qOBlMG3HYB8tPke0pZG/YrZj/AV5A/gGIH6XgBGfLve8O6ePjw3wNPQ0pH/tzPzSuub/4+wod9fNytupWq0/9apHy5nvHRNbk5/yuTq1+n5pH2l5p49jsD0g3Jxf3VGd73ixSwXwPHC9Z6d/ZjnZaLer3m1QtomfTRRT2wY9/Lv0U0Z6tlmhPIXs5833gzrHIP/wlkDZ8ByfYeA6Eguanbfr37598NcZExWrfOHd4h2/z57Gg9rxsDLp7ota/kwe6ve3R3Pw7bRwqf3iirU/dfD6J9rqMr72Sft6wqJZf/XmPzf6ANPP7+USPtw0ar8w3wFGT9v7d4vd3Qg83N3TZS3tJs01Y++DXP2c/5Ua0583NP0KTHiYt8g9/GxwbvoMT1/Uq5eY9eph8mu8Qfb3NaD4f08ur+YaN399PehIG8N+/G3r6/PunlSo/7/lptmfQNJf/6OpTlWOTH8Xrj83+AAAAOE5U/XOQMeBvgyNDaVvHaumMrnG09+HhiT5/4fyrcn5VyvSSurSVP+v1qcqxyc+xtS8AAADgF/jnfxf42+DY8BWc4CQ6pwHCZJxIplI5nuRffp/3onJPrWo6VFsmYHLZlsNtzgmALlwSAMVV/izWpypprn9dqJY/6PNm0f4EkQedpK08AIQB8gz+Giy7QfxzkA3gb4Nj5OS///7zDKtWuh/ULJp/uLAaN+jmabOMjLm4H1K/Kv63ylGO5Xfeo38PE+OfNjh5z129TPmCsKqjW3r8vhZ/16haNIR+NR9T+/HZNeprfHZzrbiYxqMXerItaVOBjfvdoE+WvvFzjfL99bPz37c/dXrfvEGNW6Nsfp+XMa41v8SFee+SHiab5+V9XZ33JpF4n+un06pRUX4JP/K++rkX11bFteYbLvXDCbms57F/r6MubM/JqJY/CDrrUzcq7ZXW+md25IdWNJ8vqLCcCn330uXD+qha/iDP61d+wtgfHuC0akXj/oKVaKdR+4fKraaosxWNG7fKW0lU5UG2UT1PtC7/na3NVqL8I1H+V9fy+yFIeQai4s0qcfzP2Y5zoR6PNFEsV7j+Yr89DGP/VbC+pzTb9JvbMu7Wp6r2d36uDyM/qvbBD5btNGtYYMjJK5072oa/a1u/DrUvE8TeBoHvd91pUU0UZlNkUT+jtvjOrXYN3L/7lweV8ljw/TvSlhl/r4QNbU/L1JdFVdddO8HKE628OdpcoKrvvuTNslfi94LQsRzN5D2+hDzz8zflh8VzjMVzm/pulcuvfQjin9uRnydv/8ri0PNGXp8R2BOLOOTfnzyIaxTtbRD/RxW//hITR3kAsNi7cmLywHuQ/tHlpZGoh42MlWyHX26G7/PpRu5bOphw5+ubfqZLKrBGnLKilolejGQ+l40eLYpV6neuzYs3sJJz4p/SckSNy0t5fWNEVGp6JeY8DO+3eraSEQnl5OfiZ5flN//mBFaXjbE0VHbD6vt5Bca1Rt1Z97b+5penYov6GYj6mbY39TMreNQPO2H9kjCAm7Zyqx/5PC4JHK29Zw2XzEyBy69ALPWpm3V73cpyrNtrcLeemUtr/Rv6VaKlXX56MyoUxWDcJVm1ij6qlj/I8/qWn6D2R+hXv1mgmVk/bBtHiyo1+9zePRrPZ/TzZV6sgLo8vJEo/qb8dRLfb9T/pWiAWaHpkDdVVMvDS4hvzX5i2/nkNpEJxUT7NYIObkK01yF7GMb+h4XrRtalrJvLnT5Vtb/zf30w+VG1D36Rief4XkYjrAcBdnmTdX+5FZjQ2N+pYgQbxKCMxEDDrHujPKJ+PNpLsu4vfPTvCvIQpDxcn3x/qz7ZvrWXZRmMDUug8miQtzD67lfeDHs1pal4LdbDYg60teh02pb1OhYDwmK1vvd4yn32IYh/ropu+6nLnjBxyL9veQhgb4P4P6r49pcEcZQHAAulnBNRwgbt9fVHGG6iotDtl9tH4XQYxvT3c0IvbOkKpw5llRHaVpVIRoQnG+dXGL62uL7Y7AQ+h5jL8zZj67rhdSo00F6GszwtpsFnI4PC9dMW9TOx1Y8s6079CGPcLAqbcSsMxaZj4vq5Fdak2BzgmKAYKJbyNJLtZcgJt9fzSMhSrkr1XX8zVXBiLRq3HVH/z4kYeLJjEaM+6iaw/RFOyspWP/I+jzzoKVL57JWeHp5CzSz65VeU9fWZHV+z/I/PTnlri/aKWd6kkyrlPE9n5nsW56cFGr8Et53B2su/PUzK/rNzXs+LgabLKgVV/VK5Pqj8qNiHIHw9j4QuFej03HzDRFQ9zbbkJ3X93XVZWIHVjpx/vb6R0V1vPZSJ//5d0d4qlseqT3tiRdYLeRIV63VYAtSPLnkLou+q9mQymcjXi/k9Vzwibd/KZzG+fy7u9bK3v9hnH3QTh/3Uak80y79S/aSwvwYgzSQWnLAzH+3ORH39CDXednLPr6iUW9HsbXdqkjMTi+6ZyiGUW35nsbzu4K/LRVGGEl2ZNkzYOhK2NXb81s/5XU3UwNy9jK8vMlJfsh4GaGM1c3E4Xqdy1s7LQU0L38uVEKvtoSV3oE/UHv2Yf5lo1se48G1/xF/5HNFiZ2nEN4lqS6xt3covGkA6YMW4G0DKubPd2Ymr52fkIiaB0GUP47b/ctawxY6qx8BDVb8C6qOK/CjZhwDwCorp3NkuXE81GjlWTDCp6+/Ed/Z6I2U5921/VNtXtTy2wZwWAtSPTnlT1fdQ8iYGnvkpB1Q37cyDXvugdpuD9kEzcdhPrfZEs/wHlYdU9dcApJRUBCf8YmSIXbgvm/4yZtVCDRCkY23M2vAshZFkKEdsO9nBLtNS8TTg+ODyXpXEyGk+dY3EcwRY+julq3DRaHCQ3cErYwxg3TriNCFnLgtN+vgYUvf+niq2mcfPyWa2jtGuj6nDKwjhFbRIDkvfRWFj1XdjcLnlZAmnr7B8i9XBDmQPY7T/cuDBOToWP571oqpfUeqjl/yo2Ieg8IyrvV34uXjG1U4a+zv+Tp4p57wCnDSu2x3ScPhB7+/2nBnBUW1f1fLw6iZhxdzvHwFB6kervCnoe2h5W6kd6enHPugkLvups311yn/U9se6Pu7+GoC0kqnghEGRmu/vwph9OF7vjmRaQeHBhxnt5FkKGtPYcrQTcLABiBseXD7eNuS+TypxLgWha0PhOHhmcdapj+mCHQjetpCrtujerA92Uq55BkXR+fzLyOW8xdp6Set1ueA625s+YrL/+ToNWnkayZs3Xfc+b1DVL736qG4fAsCDHHOJszEIWLjPTqaQi/suDcTgp1XL03Lapnb7cp0TIBrU2ld/edRQLY9eeUupv6dkH9KEen3qtidpk38AgD8yGJzgZFmb5DbbrzBJgHjwwfvmeHabZymER01vPFVaLNPdaSFVM6MA6IL1gPd9PtxwsqYG9RYkE0gNuxXzCjv69DGVfIuB03xB+VrfHBT0qZafUa/tslTzWJEzaIaT6rUkP43EZf9zhaWRY+DpQSYW25+bRVW/9Oujmn1QhwcsnENEDmp4kLNwn51MG0Y2+yIteg26uXmQ++g/I5d7/+0bT3n8E7Q8uuQtrf6emn1ID0HrU1f7pk3+AQD+yVRwQu5pc0mWFSXWvjk+9Ydn+6y9nNVqumdvrI7Ba1mYtcxuJToMDKKSwFj6v1qmdWOQsfSyu+UQcCKnycONTFBlnw1n4tDHNME6dNeqEU0fpSO1HhBwEsyUOT2WvguPMHZ958ElL57gJa13wkndXpIfB0HtYRz23/6dVjLVpsvJDKr6FaU+usmPqn0Ig6x3HtR4yE/a+jv+PmOZ9yaZXtSotG+Q8ui050HKE4e8+dX3OOXNr33QSRz2U2f76pb/qOXBuj6J/hqANJKtlRMHkg7xEq7QzpGc9StSsWAmcDP3copR5c5+uai54D13LobOL7Ij8Mr4e12nqkcyre19yGvDrkjY8kfNdnn4/OouL4MdRiAne3Dd131tJFtKd/1/07Lg4RBYemAnYn1ULX/c8sYOifS9msay6uFwSMNu19grG+GydlV5cJc31nfhm0Uwog4in3Jrh7BFSQZ1A9nDmO2/XNZsTI/uLt9W1a+A+uhffhTtQxhkgrj9QaGk+zsnRvD5EPxdFwo20YFS+wYoj23Fkx2+hk8pCkeQ+olB3hT0Pai8hWGvfdCMfvups331y39U9kfiam/3k3p/m4NPQ8PfTlM5QTZQCk4kncyPBwd85A5V+zS8r6wjlmw8Kt0hteglguXDvG9O/FhHMI2/o56BMfZll9eGmZc/1/M/oZavygzHvBy2OXDs2eNkQAN55FHbUT/rGU4+a3tdDmGIO3XKL8RDC8Pb6tw5khRZ6Ch/GHyV54wDBIKccHpde5QoEPVWarnWvzyCMvX1nxPqNVjnVGBYv4y8Cs4TF8Loo2r50yJv38sFzcc96vV6NBqNaMZvlkpUa/I2j+G6fEEILA+lOnVt9b+WNzlrFLx+wsinaDDh6Ak8EobFgao9NIjH/tv5ndiWb9vqUlW/Auujkvz4tw9h4GeRM5N75CfO/u4Q1r2NQaStLBcV6gxaVBK/G/7TGV15BBcOodK+QcrDn+HtNDs5dTotUT/yZlTrdALZuOD1o1ve/Ot7MHsSHi/7sE3U/nk89lNP+8Yh/4HlIUB/nUl/myfkOEAk/O3aXTCbB46Xk//++89TulngZMZg828HQpH+PUzMPzYY+7zcQ5YreT63scTqpNKld6GQa2z3q3Q/yPmvS4fS8gz4Xb1GVSn5zEoagqiWU/Iz1H/47GLjO7f/tuP3ed1gh6JpPsNqPqb242bfepj6YWNXr1UNw8Cs5jQeCcfFpX7Y+N4J47uuS3Ftr/1I31cDauVnNJr+0Per+1FW+8ofFF31acF102paZ8VHIy8WHCkWfRc9Pn6LzrVOtWrR0J2VkM+Ru3ymqf6tsuR5zqJQEPJjtcNK3H/mef+g+qhafl/tq9H+yHvnR652j5GfI3e76BcVeZDy9t4kEuV7oY6Qa1PeIrSHYeWzPHW3m6rEZQ+ZbXu//XcQdvrS1Zgat4b8bsts2P7O7/Wq8hPUPgSFVwLUfx4P1ntc/d0h+N4Ouy9gOzV6eabXs44cgOT4+24f6fW6o93/USmPfVBxIXStVRP/4w+Jvmss+q5nqtOgRjQbTentW9RPgEG4annikjdVffcjb6q+cxD7EMQ/35YtBx6f0WU/dbdvXPLvt37C9tdR+3vMtmzZCetvy+cdcKJeUR/CxuoI3IG/y97gBAB/DdkhDvqUHzkdPgAOcSj4wP+vLaMPenlhd3Ygy0CVNMuPMXC5oreIAx4AAJAE6K8B8E8GT+sAIDjn13UqLcItdwfHCS9lXBWbjiXVDA+kKvc8ixD9nmNfuO1hBcAvKZEfdt678hhBoVvCTudxdDcA4K+B/hqAg2DlBDgaeJlwKz+l9mOwZbsAWEuqS8WcbTmtsQyVl4vGdWrHzjYHmlPv0rk8FQAv0ig/rFudPi8D5mXCPbrxWKEEAABZAv01AGogOAEAAAAAAAAAAIBEwbYOAAAAAAAAAAAAJAqCEwAAAAAAAAAAAEgUBCcAAAAAAAAAAACQKAhOAAAAAAAAAAAAIFEQnAAAAAAAAAAAAECiIDgBAAAAAAAAAACAREFwAgAAAAAAAAAAAImC4AQAAAAAAAAAAAASBcEJAAAAAAAAAAAAJAqCEwAAAAAAAAAAAEgUBCcAAAAAAAAAAACQKAhOAAAAAAAAAAAAIFEQnAAAAAAAAAAAAECiIDgBAAAAAAAAAACAREFwAgAAAAAAAAAAAImC4AQAAAAAAAAAAAASBcEJAAAAAAAAAAAAJAqCEwAAAAAAAAAAAEgUBCcAAAAAAAAAAACQKAhOAAAAAAAAAAAAIFEQnAAAAAAAAAAAAECiIDgBAAAAAAAAAACAREFwAgAAAAAAAAAAAImC4AQAAAAAAAAAAAASBcEJAAAAAAAAAAAAJAqCEwAAAAAAAAAAAEgUBCcAAAAAAAAAAACQKAhOgNCcXFzQxUWF7rv3VDk5Md+NDt33BwAAAAAAAACQJET/B7KdjRMEP8IPAAAAAElFTkSuQmCC)接着会进入正式的安装

```Shell
 //BMAD method的安装路径，放在项目下就行
 Installation directory:
│  D:\test
|
•  Resolved installation path: D:\test
|
|  Directory exists and is empty
|
o  Install to this directory?
|  Yes
|
o  Checked latest module versions.
//选择要安装的官方模块，这里可以自行选择适合自己的，
|
o  Select official modules to install:
|  6 items selected
|
|  Selected official modules:
|    • BMad Method (v6.10.0)
|    • BMad Core Module (v6.10.0)
|    • BMad Test Architect (v1.19.1)
|    • BMad Builder (v2.1.0)
|    • BMad Creative Intelligence Suite (v0.2.1)
|    • Whiteport Design Studio (v0.4.3)
|
//上一步安装了官方的模块，这里问要不要安装自定义模块，也就是github上大佬开发的模块，这里如果选择yes，需要把这个模块的地址拷贝下来，或者把这个模块克隆到本地
o  Do you want to install custom or community modules (Git URL or local path)?
|  No
|
o  Ready to install (all stable)? Pick "n" to customize channels or pin versions.
|  Yes
|
o  Integrate with:
|  2 items selected
|
//选择针对什么AI工具，它会根据你的选择为不同的工具生成可被扫描到的skill
|  Selected tools:
|    • Codex ⭐
|    • Claude Code ⭐
|
//一些自定义设置
o  Configuring BMad Core Configuration
◇  What should agents call you? (Use your name or a team name)
│  Administrator
◇  What is your project called?
│  test
◇  What language should agents use when chatting with you?
│  English
◇  Preferred document output language?
│  English
◇  Where should output files be saved?
│  _bmad-output

```

## 一些注意点

`报类似Could not resolve stable tag for 'xxx',是GitHub API 限流，这里需要设置GITHUB_TOKEN，设置流程直接问AI`

设置`GITHUB_TOKEN的终端和安装BMAD的终端需要是同一个，比如你在powershell里设置的，也要在powershell里安装，cmd同理`

# 基础使用

官方文档：<https://docs.bmad-method.org/zh-cn/tutorials/getting-started/>

## 命名智能体

### 定义

概念解释：一个可辨识的身份，把一组相关技能包装在统一的语气、原则和视觉标识下，目录名以 `bmad-agent-*` 开头的技能。

以下是内置的一些命名智能体，当然也可以自己设置自定义智能体：

| 智能体               | 阶段   | 模块                           |
| :---------------- | :--- | :--------------------------- |
| 📊 Mary，商业分析师     | 分析   | 市场调研、头脑风暴、产品摘要、PRFAQ         |
| 📚 Paige，技术文档工程师  | 分析   | 项目文档、流程图、文档校验                |
| 📋 John，产品经理      | 规划   | PRD 创建、Epic/Story 拆分、实施就绪评审  |
| 🎨 Sally，UX 设计师   | 规划   | UX 设计规范                      |
| 🏗️ Winston，系统架构师 | 方案设计 | 技术架构、一致性检查                   |
| 💻 Amelia，高级工程师   | 实现   | Story 执行、快速开发、代码评审、Sprint 规划 |

### 命名智能体定义文档理解

当我们下达如下命令”嘿 Mary，咱们来头脑风暴”，Mary 就激活了。然后她跳过菜单，直接进入头脑风暴。如果说的不够清晰，会显示菜单让你选择使用哪一个skill。

当我们去看BMAD安装后的目录会发现，Mary这个角色对应的文档在.agents/skills/bmad-agent-analyst下，也就是说Mary也是一个skill。这个目录下有customize.toml和SKILL.md。

打开customize.toml，会看见以下字段，它们定义了这个skill的“人设”。包括它的名字，能力以及能力对应的skill。通过这个AI就可以根据你的命令选择合适的skill或者是在终端显示可选的skill菜单。注意这是一个可编辑文档，所以后续这个角色的功能是可以扩展的。

```TOML
[agent]
# agent 这一段是“这个技能扮演的角色”的配置区

# 不可通过普通配置改名/改标题；如果要换名字或头衔，通常要新建自定义 agent
name = "Mary"  # 这个 agent 的显示名，用户看到的角色名
title = "Business Analyst"  # 这个 agent 的职位/身份标题

icon = "📊"  # 这个 agent 对外显示的图标，用来一眼识别当前是谁在说话

activation_steps_prepend = []  # 激活前要先执行的步骤列表；这里为空，表示没有额外预处理

activation_steps_append = []  # 进入主流程前、问候之后要执行的步骤列表；这里为空

persistent_facts = [
  "file:{project-root}/**/project-context.md",  # 会读取项目里所有匹配到的 project-context.md 文件内容，作为长期上下文
]

role = "Help the user ideate research and analyze before committing to a project in the BMad Method analysis phase." 
# 这个 agent 的职责说明：帮助用户做研究、分析、构思，在正式承诺项目之前先弄清楚方向

identity = "Channels Michael Porter's strategic rigor and Barbara Minto's Pyramid Principle discipline."
# 这个 agent 的“人格/方法论身份”：强调战略分析严谨性和金字塔原理式表达

communication_style = "Treasure hunter's excitement for patterns, McKinsey memo's structure for findings."
# 这个 agent 的说话风格：发现线索时像寻宝一样兴奋，但表达结果时像咨询备忘录一样结构化

principles = [
  "Every finding grounded in verifiable evidence.",  # 每个结论都必须有可验证证据
  "Requirements stated with absolute precision.",    # 需求必须表达得非常准确
  "Every stakeholder voice represented.",            # 要尽量覆盖所有相关方的声音
]

[[agent.menu]]
# 一个菜单项；双中括号表示“数组中的一个表”，也就是可重复的菜单条目

code = "BP"  # 菜单代码，用户可用这个缩写快速选择
description = "Expert guided brainstorming facilitation"  # 这个菜单项的说明
skill = "bmad-brainstorming"  # 选中后要跳转执行的技能名

[[agent.menu]]
code = "MR"
description = "Market analysis, competitive landscape, customer needs and trends"
skill = "bmad-market-research"

[[agent.menu]]
code = "DR"
description = "Industry domain deep dive, subject matter expertise and terminology"
skill = "bmad-domain-research"

[[agent.menu]]
code = "TR"
description = "Technical feasibility, architecture options and implementation approaches"
skill = "bmad-technical-research"

[[agent.menu]]
code = "CB"
description = "Create or update product briefs through guided or autonomous discovery"
skill = "bmad-product-brief"

[[agent.menu]]
code = "WB"
description = "Working Backwards PRFAQ challenge — forge and stress-test product concepts"
skill = "bmad-prfaq"

[[agent.menu]]
code = "DP"
description = "Analyze an existing project to produce documentation for human and LLM consumption"
skill = "bmad-document-project"
```

SKILL.md就是用于定义"Mary"的工作流的，跟普通的SKILL.md文档没什么区别。

### 调用时做了什么

那么AI是如何知道Mary对应的是哪一个skill呢？这主要依赖于\_bmad/config.toml文件，这里面定义了BMAD method的配置，包括当前项目名，命名智能体和skill之间的对应关系，以及安装的modules。通过这个文件，AI就可以知道当你向'Mary'下达命令时，它应该去调用哪一个skill。

调用命名智能体时的具体步骤如下，其实就是SKILL.md文档（这里以Mary为例）：

1. **解析智能体配置** — 根据SKILL.md 中的工作流，第一步就是获得Mary的人设，运行python脚本将内置 `customize.toml` 与团队覆盖和个人覆盖合并。
   ```
   Run: python3 {project-root}/_bmad/scripts/resolve_customization.py --skill {skill-root} --key agent
   ```
   这并不意味着必须安装python，继续往下读会看到如果脚本运行失败，直接按顺序读取配置文件即可。
   ```
   1.
   {skill-root}/customize.toml — defaults
   2.
   {project-root}/_bmad/custom/{skill-name}.toml — team overrides
   3.
   {project-root}/_bmad/custom/{skill-name}.user.toml — personal overrides
   ```
   对于Mary来说，人设配置文件的读取顺序如下，因为是覆盖合并，所以**个人自定义的人设优先级最高，其次是团队，最后才是官方**。也就是说，如果需要更改人设需要在这个文件project-name/\_bmad/custom/bmad-agent-analyst.user.toml或者project-name/\_bmad/custom/bmad-agent-analyst.toml下更改，虽然直接在bmad-agent-analyst/customize.toml中也可以更改，但是需要注意的是，**如果重新安装BMAD，这个文件会被覆盖。**
   ```
   1.
   bmad-agent-analyst/customize.toml — defaults
   2.
   project-name/_bmad/custom/bmad-agent-analyst.toml — team overrides
   3.
   project-name/_bmad/custom/bmad-agent-analyst.user.toml — personal overrides
   ```
2. **执行前置步骤** — 团队配置的任何预处理行为，也就是customize.toml中的activation\_steps\_prepend字段
3. **采用人设** — 硬编码身份加上自定义的角色、沟通风格、原则
4. **加载持久化事实** — 组织规则、合规说明，可通过 `file:` 前缀加载文件（如 `file:{project-root}/docs/project-context.md`）
5. **加载配置** — 用户名、沟通语言、输出语言、产物路径
6. **打招呼** — 个性化问候，使用配置的语言，带上智能体的 emoji 前缀让你一眼认出谁在说话
7. **执行后置步骤** — 团队配置的任何问候后设置，也就是customize.toml中的activation\_steps\_append字段
8. **分发或展示菜单** — 如果你的开场消息能匹配某个菜单项，直接执行；否则展示菜单等待输入

<br />

**1、注意：通过上文可以知道，某些skill是被定义在一个角色比如"mary"的人设文档的menu中的，所以你通过唤醒Mary可以调用某些skill，但是如果skill没有被加入到menu中，那么就需要通过/skill-name(codex中)的方式使用某一个skill。**

**2、启发：根据Mary的路径，我们可以自定义一个角色，这个角色的skill目录要放在本地，不要放在.agent/skills目录下，放在这里重新安装BMAD时可能会被覆盖，然后将其软链接到.agent/skills下。在这个skill中定义好toml文件和md文件，和Mary一样，然后在\_bmad/config.toml中定义好这个角色对应的skill即可。这里需要注意，并不是想当然的在\_bmad/config.user.toml中定义，它是由安装器维护，从每个模块的 module.yaml 重建**

## 核心文件夹

安装后每个文件夹的作用

## 运行机制

运行机制，\_bmad文件夹下与每一个skill的关系

<br />

