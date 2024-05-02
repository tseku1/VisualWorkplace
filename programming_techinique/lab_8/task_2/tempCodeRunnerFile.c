 else if (last_c_char == 'G')
        {
            last_p_char = (producer_index > 0) ? producer_array[producer_index - 1] : '\0';
            if (last_p_char == 'B')
            {
                consumer_array[consumer_index++] = producer_array[--producer_index];
            }
        }
        else if (last_c_char == 'B')