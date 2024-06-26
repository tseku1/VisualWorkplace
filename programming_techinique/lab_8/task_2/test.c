#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <windows.h> // replace this with #include<windows.h> for windows platform
#define BUFFER_SIZE 99
#define PRODUCTION_COST 0

char producer_array[BUFFER_SIZE * 10];
char consumer_array[BUFFER_SIZE];

int producer_index = 0;
int consumer_index = 0;

// mutex zarlalt
pthread_mutex_t producer_mutex;
pthread_mutex_t consumer_mutex;


void *producer1(void *arg)
{
    while (consumer_index < BUFFER_SIZE)
    {
        char product;
        int rand_int = rand() % 2;

        if (rand_int == 0)
        {
            product = 'R';
            Sleep(PRODUCTION_COST);
        }
        else
        {
            product = 'G';
            Sleep(PRODUCTION_COST);
        }

        // mutex lock
        pthread_mutex_lock(&producer_mutex);

        char last_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
        if (product == 'R')
        {
            if (last_char == 'B')
            {
                producer_array[producer_index++] = 'R';
            }
            else if (last_char == '\0')
            {
                producer_array[producer_index++] = 'R';
            }
        }
        else if (product == 'G')
        {
            if (last_char == 'R')
            {
                producer_array[producer_index++] = 'G';
            }
        }
        // mutex unlock
        pthread_mutex_unlock(&producer_mutex);
    }

    pthread_exit(NULL);
}

void *producer2(void *arg)
{
    while (consumer_index < BUFFER_SIZE)
    {
        char product;
        int rand_int = rand() % 2;

        if (rand_int == 0)
        {
            product = 'G';
            Sleep(PRODUCTION_COST);
        }
        else
        {
            product = 'B';
            Sleep(PRODUCTION_COST);
        }

        // mutex lock
        pthread_mutex_lock(&producer_mutex);
        char last_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
        if (product == 'G')
        {
            if (last_char == 'R')
            {
                producer_array[producer_index++] = 'G';
            }
        }
        else if (product == 'B')
        {
            if (last_char == 'G')
            {
                producer_array[producer_index++] = 'B';
            }
        }
        // unlock
        pthread_mutex_unlock(&producer_mutex);
    }

    pthread_exit(NULL);
}

void *producer3(void *arg)
{
    while (consumer_index < BUFFER_SIZE)
    {
        char product;
        int rand_int = rand() % 2;

        if (rand_int == 0)
        {
            product = 'B';
            Sleep(PRODUCTION_COST);
        }
        else
        {
            product = 'R';
            Sleep(PRODUCTION_COST);
        }

        // mutex lock
        pthread_mutex_lock(&producer_mutex);
        char last_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
        if (product == 'B')
        {
            if (last_char == 'G')
            {
                producer_array[producer_index++] = 'B';
            }
        }
        else if (product == 'R')
        {
            if (last_char == 'B')
            {
                producer_array[producer_index++] = 'R';
            }
            else if (last_char == '\0')
            {
                producer_array[producer_index++] = 'R';
            }
        }
        pthread_mutex_unlock(&producer_mutex);
    }

    pthread_exit(NULL);
}

void *consumer1(void *arg)
{
    while (consumer_index < BUFFER_SIZE)
    {
        pthread_mutex_lock(&consumer_mutex);
        char last_p_char;
        char last_c_char = (consumer_index > 0) ? consumer_array[consumer_index - 1] : '\0';
        if (last_c_char == 'R')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'G')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == 'G')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'B')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == 'B')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'R')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == '\0')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'R')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        pthread_mutex_unlock(&consumer_mutex);
    }
    pthread_exit(NULL);
}

void *consumer2(void *arg)
{
    while (consumer_index < BUFFER_SIZE)
    {
        char last_p_char;

        pthread_mutex_lock(&consumer_mutex);
        char last_c_char = (consumer_index > 0) ? consumer_array[consumer_index - 1] : '\0';
        if (last_c_char == 'R')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'G')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == 'G')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'B')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == 'B')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'R')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == '\0')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'R')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        pthread_mutex_unlock(&consumer_mutex);
    }
    pthread_exit(NULL);
}

void *consumer3(void *arg)
{
    while (consumer_index < BUFFER_SIZE)
    {
        char last_p_char;
        pthread_mutex_lock(&consumer_mutex);
        char last_c_char = (consumer_index > 0) ? consumer_array[consumer_index - 1] : '\0';
        if (last_c_char == 'R')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'G')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == 'G')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'B')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == 'B')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'R')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == '\0')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'R')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        pthread_mutex_unlock(&consumer_mutex);
    }

    pthread_exit(NULL);
}

int main()
{
    pthread_t producer_threads[3];
    pthread_t consumer_threads[3];

    pthread_mutex_init(&producer_mutex, NULL);
    pthread_mutex_init(&consumer_mutex, NULL);

    pthread_create(&producer_threads[0], NULL, producer1, NULL);
    pthread_create(&producer_threads[1], NULL, producer2, NULL);
    pthread_create(&producer_threads[2], NULL, producer3, NULL);

    pthread_create(&consumer_threads[0], NULL, consumer1, NULL);
    pthread_create(&consumer_threads[1], NULL, consumer2, NULL);
    pthread_create(&consumer_threads[2], NULL, consumer3, NULL);

    for (int i = 0; i < 3; i++)
    {
        pthread_join(producer_threads[i], NULL);
        pthread_join(consumer_threads[i], NULL);
    }

    pthread_mutex_destroy(&producer_mutex);
    pthread_mutex_destroy(&consumer_mutex);

    printf("Consumer Array: ");
    for (int i = 0; i < consumer_index; i++)
    {
        printf("%c", consumer_array[i]);
    }
    printf("\n");
    printf("\n");
    printf("\n");

    printf("Producer Array: ");
    for (int i = 0; i < producer_index; i++)
    {
        printf("%c", producer_array[i]);
    }
    printf("\n");
    return 0;
}