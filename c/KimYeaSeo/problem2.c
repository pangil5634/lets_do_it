#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    char str[100];
    fgets(str, 100, stdin);

    int len = strlen(str);

    int j = 1;
    int count = 0;
    char newStr[100];
    for (int i = 0; i < len; i++)
    {
        if ((int)tolower(str[i]) >= 97 && (int)tolower(str[i]) <= 122)
        {
            newStr[count] = tolower(str[i]);
            count++;
        }
    }

    newStr[count] = '\0';

    int len2 = strlen(newStr);

    for (int i = 0; i < (len2 / 2); i++)
    {
        // printf("%c, %c\n", str[i], str[len - i - 1]);
        if (newStr[i] != newStr[len2 - i - 1])
        {
            j = 0;
            break;
        }
    }

    if (j == 0)
        printf("No");
    else
        printf("Yes");
    return 0;
}
