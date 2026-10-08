package com.example.order;

import java.util.List;
import java.util.Optional;

public class OrderService {

    private final OrderRepository orderRepository;

    private final NotificationService notificationService;

    public OrderService(OrderRepository orderRepository, NotificationService notificationService) {
        this.orderRepository = orderRepository;
        this.notificationService = notificationService;
    }

    public Optional<Order> findById(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("id must not be null");
        }
        return orderRepository.findById(id);
    }

    public void markAsPaid(Long orderId, LocalDateTime paidAt) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new OrderNotFoundException(orderId));

        order.setPaidAt(paidAt);
        orderRepository.save(order);

        notificationService.notifyPaymentReceived(order);
    }

    public List<Order> findUnpaidOrders() {
        return orderRepository.findAll().stream()
                .filter(order -> order.getPaidAt() == null)
                .sorted(Comparator.comparing(Order::getId))
                .collect(Collectors.toList());
    }
}