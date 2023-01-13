public class IntLLQueue {
    private IntLinkedList data;

    /* Linked List implementation of a Queue
    where the front of the Linked List is the front of the Queue */

    public IntLLQueue() {
        data = new IntLinkedList();
    }

    public boolean isEmpty() {
        return data.isEmpty();
    }

    public void clear() {
        data = new IntLinkedList();
    }

    public boolean enqueue(Integer el) {
        return data.add(el);
    }

    public Integer dequeue() {
        return data.removeFront();
    }

    public Integer peek() {
        return data.get(0);
    }
}