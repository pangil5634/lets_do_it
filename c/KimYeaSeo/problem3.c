#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    char alphacount1[100];
    char alphacount2[100];

    fgets(alphacount1, 100, stdin);
    fgets(alphacount2, 100, stdin);

    int count1 = 0;
    for (int i = 0; i < strlen(alphacount1); i++)
    {
        if ((int)tolower(alphacount1[i]) >= 97 && (int)tolower(alphacount1[i]) <= 122)
        {
            count1++;
        }
    }

    int count2 = 0;
    for (int i = 0; i < strlen(alphacount2); i++)
    {
        if ((int)tolower(alphacount2[i]) >= 97 && (int)tolower(alphacount2[i]) <= 122)
        {
            count2++;
        }
    }

    if (count1 == count2)
        printf("Yes\n");
    else
        printf("No\n");

    return 0;
}