#include <stdio.h>
#include <string.h>

int main(void)
{
    char names[13][100] = {"Global Leadership School",
                           "International Studies, Languages and Literature",
                           "Management and Economics",
                           "Law",
                           "Counseling Psychology and Social Welfare",
                           "Communication Arts",
                           "Spatial Environment System Engineering",
                           "Mechanical and Control Engineering",
                           "Contents Convergence Design",
                           "Life Science",
                           "Computer Science and Electrical Engineering",
                           "Global Entrepreneurship and ICT",
                           "Creative Convergence Education"};

    char word[100];
    int count = 0;

    scanf("%s", word);
    printf("Matching :");
    for (int i = 0; i < 13; i++)
    {
        if (strstr(names[i], word) != NULL)
        {
            count++;
            printf("[%s]\n", names[i]);
        }
    }
    printf("%d found\n", count);
    return 0;
}