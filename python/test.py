import pandas as pd # 데이터를 다루기 위한 라이브러리
import urllib.request # URL을 통해 데이터를 다운로드하기 위한 모듈
import re # 정규 표현식을 사용하기 위한 모듈
from collections import Counter

# 주어진 URL에서 데이터를 다운로드하고 파일로 저장
urllib.request.urlretrieve("https://raw.githubusercontent.com/ukairia777/tensorflow-nlp-tutorial/main/10.%20RNN%20Text%20Classification/dataset/spam.csv", filename="spam.csv")
# 다운로드한 CSV 파일을 pandas 데이터프레임으로 로드
## CSV 파일의 인코딩이 Latin-1로 되어 있음을 명시
df = pd.read_csv('spam.csv', encoding='latin1', usecols=[0, 1])

df.columns = ['Label', 'Message'] # 데이터프레임의 열 이름을 'Label'과 'Message'로 변경
# print(df.head(20)) # 변경된 데이터프레임의 처음 5개 행을 출력



# Function to split messages into words
# 메시지를 소문자로 변환하고, 정규 표현식을 사용하여 단어를 추출하는 함수
def tokenize(message):
  message = message.lower()  # Convert to lowercase
  words = re.findall(r'\b\w+\b', message)  # Extract words
  return words



# Separate spam and non-spam messages
# 이터프레임에서 'Label' 열 값이 'spam'인 행은 스팸 메시지로, 'ham'인 행은 일반 메시지로 분리
spam_messages = df[df['Label'] == 'spam']['Message']
non_spam_messages = df[df['Label'] == 'ham']['Message']

# Count the number of spam messages
spam_count = spam_messages.shape[0]
non_spam_count = non_spam_messages.shape[0]



# Calculate word frequency
# 단어 빈도 계산을 위한 Counter 초기화:
## Counter는 컨테이너에 저장된 요소들의 개수를 셀 수 있는 딕셔너리의 서브클래스
spam_words = Counter()
non_spam_words = Counter()

# 각 메시지의 단어를 토큰화하여 (tokenize() 함수 사용) 스팸과 비스팸 메시지에 대한 Counter 객체를 업데이트합니다.
for message in spam_messages:
  spam_words.update(tokenize(message))

for message in non_spam_messages:
  non_spam_words.update(tokenize(message))



# Function to check if a word is in a message
def is_word_in_message(word, message):
  message = message.lower()  # Convert to lowercase
  words = set(re.findall(r'\b\w+\b', message))  # Extract words and convert to a set
  return word in words


def judgeMessage(spam_flag, message_words) :
  # Filter spam messages

  spam_p = 1.0
  ham_p = 1.0

  for search_word in message_words :
    # Count how many spam messages contain the word
    span_count = sum(is_word_in_message(search_word, message) for message in spam_messages)
    non_span_count = sum(is_word_in_message(search_word, message) for message in non_spam_messages)
    non_span_count = max(non_span_count, 1)
    spam_p *= span_count / spam_count
    ham_p *= non_span_count  / non_spam_count

  spam_p /= (spam_p + ham_p)
  print(f"spam probability : {spam_p}")


  if spam_p > 0.9:
    spam_flag = 1
  return spam_flag

def printResult(input_message, spam_flag) :
  print(f"입력한 문자열 : {input_message}")
  if spam_flag == 1 :
    print("Spam 문자 여부 : O")
  elif spam_flag == 0:
    print("Spam 문자 여부 : X")

##############################################################################

# 초기 세팅
datas = ["handong", "free", "free good", "free good good", "free free good"]
for input_message in datas :
  # input_message = "free good" # 예시 입력
  message_words = tokenize(input_message) # 입력된 문자열을 단어를 갖고 있는 배열로 변환
  spam_flag = 0 # spam 인지 아닌지 판단하는 flag

  # spam 여부 판단
  spam_flag = judgeMessage(spam_flag, message_words)

  # 결과 출력
  printResult(input_message, spam_flag)
  print("\n")
