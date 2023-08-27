#include <stdio.h>

struct coordinate
{
    int x;
    int y;
};

int inData();

int main(void)
{
    int count = 0;
    scanf("%d", &count);
    struct coordinate cd[count];

    for (int i = 0; i < count; i++)
    {
        // cd[i].x = i;
        // cd[i].y = i * 10;
        // printf("%d, %d\n", cd[i].x, cd[i].y);

        scanf("%d", cd[i].x);
        scanf("%d", cd[i].y);
    }
    int count = 0;
    int sortIndex[count];
    struct coordinate min;
    for (int i = 0; i < count; i++)
    {
        min.x = 10;
        min.y = 0;
        for (int j = 0; j < count; j++)
        {
            if (cd[i].x <= min.x)
            {
                if (cd[i].x < min.x)
                {
                    if (inData(sortIndex, i) == 0)
                    {
                        sortIndex[count] = i;
                        count++;
                    }
                }
                else if (cd[i].y >= min.y)
                {
                    if (cd[i].y > min.y)
                    {
                                        }
                    else
                    {
                    }
                }
            }
        }
    }

    return 0;
}

int inData(int sortIndex[], int index)
{
    int size = sizeof(sortIndex) / sizeof(int);

    for (int i = 0; i < size; i++)
    {
        if (sortIndex[i] == index)
        {
            return 1;
        }
    }
    return 0;
}