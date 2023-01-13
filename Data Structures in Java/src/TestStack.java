public class TestStack {
    public static void main(String[] args) {
        testALStackAdd();
        testALStackRemove();
    }

    private static void testALStackRemove() {
        IntArrayStack list = new IntArrayStack();

        list.push(1);
        list.push(2);
        System.out.println(list);
    }

    private static void testALStackAdd() {
        IntArrayStack list = new IntArrayStack();
    }
}
