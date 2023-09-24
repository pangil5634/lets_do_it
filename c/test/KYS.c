#include <stdio.h>

int main()
{

    float mid, fin, ass; // 중간, 기말, 과제
    char grade;

    scanf("%f %f %f", &mid, &fin, &ass);

    float sum = (mid * 0.35) + (fin * 0.45) + (ass * 0.2);

    printf("%f", sum);
    if (sum >= 90)
        grade = 'A';
    else if (sum >= 80)
        grade = 'B';
    else if (sum >= 70)
        grade = 'C';
    else if (sum >= 60)
        grade = 'D';
    else if (sum < 50)
        grade = 'F';

    printf("%c", grade);
    return 0;
}