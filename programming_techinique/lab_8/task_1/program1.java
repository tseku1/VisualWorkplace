package programming_techinique.lab_8.task_1;

import javax.xml.crypto.Data;

public class program1 {
    int counter = 0;

void thread1() {
    counter++;

    int x = 10;
    int y = 20;
    int z = x + y;
    z = z * 2;
}

void thread2() {
    int a = 5;
    int b = 10;
    int c = a * b;

    counter++;
}


// ************************QUESTIONS***************************
// Data race: YES
// lines numbers: 9 22
// variables: counter
// possible values of the variable "counter" at the end of execution: 2

}
