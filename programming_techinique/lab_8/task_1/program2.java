package programming_techinique.lab_8.task_1;

import javax.xml.crypto.Data;

public class program2 {
    int[] array = new int[4];

void thread1() {
    array[0] = 1;
    array[2] = array[0] * array[0];
}

void thread2() {
    array[1] = 2;
    array[3] = array[1] * array[1];
}


// ************************QUESTIONS***************************
// Data race: NO
// lines numbers: 
// variables:
// possible values of the variable "array" at the end of execution (example: [1, 2, 3, 4]): 1 2 1 4
}
