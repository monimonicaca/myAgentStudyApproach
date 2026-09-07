package com.example.order;

public class Order {

    private Long id;

    private String orderNumber;

    private BigDecimal totalAmount;

    private LocalDateTime paidAt;

    private String notes;

    public Order(Long id, String orderNumber, BigDecimal totalAmount) {
        this.id = id;
        this.orderNumber = orderNumber;
        this.totalAmount = totalAmount;
    }

    public Long getId() {
        return id;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public LocalDateTime getPaidAt() {
        return paidAt;
    }

    public void setPaidAt(LocalDateTime paidAt) {
        this.paidAt = paidAt;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}