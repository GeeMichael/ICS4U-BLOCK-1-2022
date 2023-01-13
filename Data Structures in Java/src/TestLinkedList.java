public class TestLinkedList {
    public static void main(String[] args) {
        testRemoveNodes();
        testAddNodes();
    }

    private static void testRemoveNodes() {
        IntLinkedList list = new IntLinkedList();

        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);

        list.remove(1);
        System.out.println(list);
        System.out.println(list.remove(3));

        list.removeFront();
        System.out.println(list);
        System.out.println(list.removeFront());
        System.out.println(list);
    }

    private static void testAddNodes() {
        IntLinkedList list = new IntLinkedList();

        list.add(1);
        list.add(2);
        list.add(3);

        // Sysout calls toString, but we replaced toString
        System.out.println(list);

        list.addFront(4);
        list.addFront(5);
        System.out.println(list);

        list.add(1, 6);
        System.out.println(list);

        list.add(0, 0);
        System.out.println(list);

        list.add(list.size(), 0);
        System.out.println(list);
    }
}
