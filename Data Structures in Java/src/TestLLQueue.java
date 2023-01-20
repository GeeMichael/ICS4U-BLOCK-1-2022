public class TestLLQueue {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testEnqueue()) {
           System.out.println("Test Failed: testEnqueue");
           testFailed++;
        } else testPassed++;
  
        if (!testDequeue()) {
           System.out.println("Test Failed: testDequeue");
           testFailed++;
        } else testPassed++;
  
        if (!testPeek()) {
           System.out.println("Test Failed: testPeek");
           testFailed++;
        } else testPassed++;

        if (!testClear()) {
            System.out.println("Test Failed: testClear");
            testFailed++;
         } else testPassed++;

         if (!testEmpty()) {
            System.out.println("Test Failed: testEmpty");
            testFailed++;
         } else testPassed++;
  
        System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
     }

     private static IntLLQueue prepareLinkedList() {
        IntLLQueue list = new IntLLQueue();
        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);
        list.enqueue(4);
        list.enqueue(5);
  
        return list;
     }

    private static boolean testEmpty() {
        IntLLQueue list = new IntLLQueue();
        if (!list.isEmpty()) return false;

        list = prepareLinkedList();
        if(list.isEmpty()) return false;

        return true;
    }

    private static boolean testClear() {
        IntLLQueue list = prepareLinkedList();
        list.clear();

        try {
            if (list.peek() != null) return false;  
        } catch (IllegalStateException ex) {
        }
        
        return true;
    }

    private static boolean testPeek() {
        IntLLQueue list = new IntLLQueue();
        try {
            if (list.peek() != -1) return false;
        } catch (IllegalStateException ex) {
        }

        list = prepareLinkedList();
        
        try {
            if (list.peek() != 1) return false;
        } catch (IllegalStateException ex) {
        }

        return true;
    }

    private static boolean testDequeue() {
        IntLLQueue list = new IntLLQueue();
        if (list.dequeue() != -1) return false;

        list = prepareLinkedList();
        if (list.dequeue() != 1) return false;

        return true;
    }

    private static boolean testEnqueue() {
        IntLLQueue list = new IntLLQueue();
        list.enqueue(1);
        if (list.peek() != 1) return false;
        
        return true;
    }    
}
