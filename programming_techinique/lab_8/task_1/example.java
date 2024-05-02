package programming_techinique.lab_8.task_1;

import javax.xml.crypto.Data;

public class example {

    int a = 0;

void thread1() {
    a = a + 1;
}

void thread2() {
    a = a - 1;
}
}


// ************************QUESTIONS***************************
// Data race: YES
// lines numbers: 4, 8
// variables: a
// possible values of the variable "counter" at the end of execution: 0