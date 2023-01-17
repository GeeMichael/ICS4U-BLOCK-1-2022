public class IntLLQueue {
    private IntLinkedList list;

    /* Linked List implementation of a Queue
    where the front of the Linked List is the front of the Queue */

    public IntLLQueue() {
        list = new IntLinkedList();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }

    public void clear() {
        list = new IntLinkedList();
    }

    public boolean enqueue(Integer data) {
        return list.add(data);
    }

    public Integer dequeue() {
        return list.removeFront();
    }

    public Integer peek() {
        return list.get(0);
    }
}