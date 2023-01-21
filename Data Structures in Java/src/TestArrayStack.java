public class TestArrayStack {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
        
        if (!testPush()) {
           System.out.println("Test Failed: testPush");
           testFailed++;
        } else testPassed++;
  
        if (!testPop()) {
           System.out.println("Test Failed: testPop");
           testFailed++;
        } else testPassed++;
  
        if (!testPeek()) {
           System.out.println("Test Failed: testPeek");
           testFailed++;
        } else testPassed++;

        if (!testSearch()) {
            System.out.println("Test Failed: testSearch");
            testFailed++;
         } else testPassed++;

         if (!testEmpty()) {
            System.out.println("Test Failed: testEmpty");
            testFailed++;
         } else testPassed++;
  
        System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
     }

     private static IntArrayStack prepareArray() {
        IntArrayStack list = new IntArrayStack();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);
  
        return list;
     }

     private static boolean testEmpty() {
        IntArrayStack list = new IntArrayStack();
        if (!list.empty()) return false;

        list = prepareArray();
        if(list.empty()) return false;

        return true;
    }

    private static boolean testSearch() {
        IntArrayStack list = new IntArrayStack();
        if (list.search(1) != -1) return false;

        list = prepareArray();
        if (list.search(1) != 0) return false;
        if (list.search(6) != -1) return false;

        return true;
    }

    private static boolean testPeek() {
        IntArrayStack list = new IntArrayStack();
        if (list.peek() != -1) return false;
        
        list = prepareArray();
        if (list.peek() != 5) return false;

        return true;
    }

    private static boolean testPop() {
        IntArrayStack list = new IntArrayStack();
        if (list.pop() != -1) return false;

        list = prepareArray();
        if (list.pop() != 5) return false;

        return true;
    }

    private static boolean testPush() {
        IntArrayStack list = new IntArrayStack();
        if (list.peek() != -1) return false;

        list = prepareArray();
        if (list.peek() != 5) return false;

        return true;
    }    
}
