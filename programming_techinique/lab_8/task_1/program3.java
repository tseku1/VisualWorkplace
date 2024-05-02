package programming_techinique.lab_8.task_1;

import javax.xml.crypto.Data;

public class program3 {
    private int value = 0;

    synchronized void increment() {
        value++;
    }

    synchronized void decrement() {
        value--;
    }

    void thread1() {
        this.increment();
    }
    
    void thread2() {
        this.decrement();
        
    }

}




// ************************QUESTIONS***************************
// Data race: YES
// lines numbers: 17 , 21
// variables: value
// possible values of the variable "value" at the end of execution: 0
