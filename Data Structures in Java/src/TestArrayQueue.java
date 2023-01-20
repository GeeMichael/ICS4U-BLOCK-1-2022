public class TestArrayQueue {
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

     private static IntArrayQueue prepareArray() {
        IntArrayQueue list = new IntArrayQueue();
        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);
        list.enqueue(4);
        list.enqueue(5);
  
        return list;
     }

     private static boolean testEmpty() {
        IntArrayQueue list = new IntArrayQueue();
        if (!list.isEmpty()) return false;

        list = prepareArray();
        if(list.isEmpty()) return false;

        return true;
    }

    private static boolean testClear() {
        IntArrayQueue list = prepareArray();
        list.clear();
        if (list.peek() != null) return false;     

        return true;
    }

    private static boolean testPeek() {
        IntArrayQueue list = new IntArrayQueue();
        if (list.peek() != null) return false;
        
        list = prepareArray();
        if (list.peek() != 1) return false;

        return true;
    }

    private static boolean testDequeue() {
        IntArrayQueue list = new IntArrayQueue();
        list.dequeue();
        if (list.peek() != null) return false;
        
        return true;
    }

    private static boolean testEnqueue() {
        IntArrayQueue list = new IntArrayQueue();
        if (list.peek() != null) return false;

        list = prepareArray();
        if (list.peek() != 1) return false;

        return true;
    }    
}

