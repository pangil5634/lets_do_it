#include <iostream>

using namespace std;
int main(void)
{

    // 두 개의 수 선언
    int num1 = 0;
    int num2 = 0;

    // 두 개의 수 입력 받기
    cin >> num1;
    cin >> num2;

    // 나눌 값을 1~100의 자리 수로 나누기
    int hund1 = num2 / 100;
    int ten1 = num2 / 10 - (hund1 * 10);
    int one1 = num2 - (hund1 * 100) - (ten1 * 10);

    // 계산하기
    int result = 0;
    result += hund1 * num1 * 100;
    result += ten1 * num1 * 10;
    result += one1 * num1;

    // 결과 출력
    cout << "Result : " << result << endl;
    return 0;
}
