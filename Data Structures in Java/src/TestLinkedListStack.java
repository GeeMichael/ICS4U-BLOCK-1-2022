public class TestLinkedListStack {
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

     private static IntLLStack prepareLinkedList() {
        IntLLStack list = new IntLLStack();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);
  
        return list;
     }

    private static boolean testEmpty() {
        IntLLStack list = new IntLLStack();
        if (!list.empty()) return false;

        list = prepareLinkedList();
        if(list.empty()) return false;

        return true;
    }

    private static boolean testSearch() {
        IntLLStack list = new IntLLStack();
        if (list.search(1) != -1) return false;

        list = prepareLinkedList();
        if (list.search(1) != 4) return false;
        if (list.search(6) != -1) return false;

        return true;
    }

    private static boolean testPeek() {
        IntLLStack list = new IntLLStack();

        try {
            if (list.peek() != -1) return false;
        }   catch (IllegalStateException ex) {
        }
        
        list = prepareLinkedList();
        if (list.peek() != 5) return false;

        return true;
    }

    private static boolean testPop() {
        IntLLStack list = new IntLLStack();
        if (list.pop() != -1) return false;

        list = prepareLinkedList();
        if (list.pop() != 5) return false;

        return true;
    }

    private static boolean testPush() {
        IntLLStack list = new IntLLStack();
        list.push(1);
        if (list.peek() != 1) return false;
        
        return true;
    }    
}
