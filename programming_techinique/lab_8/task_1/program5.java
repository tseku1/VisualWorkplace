package programming_techinique.lab_8.task_1;

import javax.xml.crypto.Data;

public class program5 {
    int x = 5;
    int y = 3;

void thread1() {
    x = 0;
}

void thread2() {
    if (x > 0) {
        int[] array = new int[x];
        int result = array[y];
        System.out.println(result);
    }
}

	
// ************************QUESTIONS***************************
// Data race: YES
// lines numbers: 10 , 14
// variables: x
// What would be printed on the screen at the end of execution (state all possibilities): 0

}
