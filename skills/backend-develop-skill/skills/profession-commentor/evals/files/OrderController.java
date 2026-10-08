package com.example.order;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/{id}")
    public OrderResponse getOrder(@PathVariable Long id) {
        Order order = orderService.findById(id)
                .orElseThrow(() -> new OrderNotFoundException(id));
        return OrderResponse.from(order);
    }

    @PostMapping
    public OrderResponse createOrder(@RequestBody CreateOrderRequest request) {
        Order order = new Order(null, request.orderNumber(), request.totalAmount());
        return OrderResponse.from(order);
    }

    @PostMapping("/{id}/pay")
    public void markAsPaid(@PathVariable Long id) {
        orderService.markAsPaid(id, LocalDateTime.now());
    }

    @GetMapping
    public List<OrderResponse> listUnpaidOrders() {
        return orderService.findUnpaidOrders().stream()
                .map(OrderResponse::from)
                .collect(Collectors.toList());
    }
}

public record CreateOrderRequest(
        String orderNumber,
        BigDecimal totalAmount
) {
}

public record OrderResponse(
        Long id,
        String orderNumber,
        BigDecimal totalAmount,
        LocalDateTime paidAt
) {
    public static OrderResponse from(Order order) {
        return new OrderResponse(
                order.getId(),
                order.getOrderNumber(),
                order.getTotalAmount(),
                order.getPaidAt()
        );
    }
}