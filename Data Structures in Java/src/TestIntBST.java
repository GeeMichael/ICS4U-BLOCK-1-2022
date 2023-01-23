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

        if (!testFind()) {
            System.out.println("Test Failed: find");
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
        if (list.inOrderPrintTraversal().equals(" 1 3 6 7 8 9 11 13")) return false;
        return true;
    }

    private static boolean testPreOrder() {
        IntBST list = prepareBST();
        //list.preOrder();
        return true;
    }

    private static boolean testPostOrder() {
        IntBST list = prepareBST();
        // System.out.println("List: " + list.postOrderPrintTraversal());
        // if (list.postOrderPrintTraversal().equals(" 1 3 6 7 8 9 11 13")) return false;
        list.postOrder();
        
        return true;
    }

    private static boolean testFind() {
        return false;
    }

    private static boolean testRemove() {
        return false;
    }
}
