from scipy.stats import norm

mean = 평균값  # 정규분포의 평균
std_dev = 표준편차  # 정규분포의 표준편차

# P(10 ≤ x ≤ 20) 계산
probability = norm.cdf(20, loc=mean, scale=std_dev) - norm.cdf(10, loc=mean, scale=std_dev)

print("P(10 ≤ x ≤ 20) =", probability)