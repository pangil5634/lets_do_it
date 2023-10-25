    for (int i = 0; i < len; i++)
    {
        if (!(str[i] == ' ' || str[i] == '\t' || str[i] == '\n' || str[i] == '\r'))
        {
            newStr[count] = str[i];
            count++;
        }
    }
