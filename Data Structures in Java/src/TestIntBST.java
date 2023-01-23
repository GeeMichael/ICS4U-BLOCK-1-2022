public class TestIntBST {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testInOrder()) {
            System.out.println("Test Failed: inOrder");
            testFailed++;
        } else
            testPassed++;

        if (!testPreOrder()) {
            System.out.println("Test Failed: preOrder");
            testFailed++;
        } else
            testPassed++;

        if (!testPostOrder()) {
            System.out.println("Test Failed: postOrder");
            testFailed++;
        } else
            testPassed++;

        if (!testRemove()) {
            System.out.println("Test Failed: remove");
            testFailed++;
        } else
            testPassed++;

        System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
    }

    private static IntBST prepareBST() {
        IntBST list = new IntBST();
        list.add(6);
        list.add(8);
        list.add(3);
        list.add(1);
        list.add(13);
        list.add(9);
        list.add(7);
        list.add(11);

        return list;
    }

    private static boolean testInOrder() {
        IntBST list = prepareBST();
        if (!list.inOrderPrintTraversal().equals(" 1 3 6 7 8 9 11 13")) return false;
        return true;
    }

    private static boolean testPreOrder() {
        IntBST list = prepareBST();
        if (!list.preOrderPrintTraversal().equals(" 6 3 1 8 7 13 9 11")) return false;
        return true;
    }

    private static boolean testPostOrder() {
        IntBST list = prepareBST();
        if (!list.postOrderPrintTraversal().equals(" 1 3 7 11 9 13 8 6")) return false;        
        return true;
    }

    private static boolean testRemove() {
        IntBST list = prepareBST();
        list.remove(6);
        if (list.inOrderPrintTraversal().length() == 17) return false;

        list.remove(5);
        if (list.inOrderPrintTraversal().length() == 17) return false;

        return true;
    }
}
