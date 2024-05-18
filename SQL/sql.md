CREATE TABLE t
  (C INTEGER PRIMARY KEY,
  D INTEGER);

CREATE TABLE s
  (B INTEGER PRIMARY KEY,
  C INTEGER,
  FOREIGN KEY (C) REFERENCES T(C)
  ON DELETE CASCADE);

CREATE TABLE r
  (A INTEGER PRIMARY KEY,
  B INTEGER,
  FOREIGN (B) REFERENCES S(B)
  ON DELETE SET NULL);
  

INSERT INTO t (C, B)
VALUES (123, 456);

INSERT INTO s (B, C)
VALUES (111, 123);

INSERT INTO r (A, B)
VALUES (101, 111);
# 참조 하지 않는 건, 값으로 지정할 수 없다.

UPDATE t SET B = 444;

<!-- INSERT INTO table_name (column1, column2)
SELECT column1, column2
FROM another_table
WHERE condition;

INSERT IGNORE INTO table_name (column1, column2)
VALUES (value1, value2);

REPLACE INTO table_name (column1, column2)
VALUES (value1, value2);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) -->

UNIQUE: 중복 X, NULL O
PK: 테이블당 1개만 생성 가능
FK: 외래키 테이블당 여러 개 생성 가능
NOT NULL: 명시적으로 NULL 입력을 방지 함.

1. 관계형 데이터베이스의 개요
2. DDL
3. DML
4. TCL
5. WHERE 절
6. 함수
7. GROUP BY, HAVING 절
8. ORDER BY 절
9. 조인(JOIN)
---
1. 표준 조인
2. 집합 연산자
3. 계층형 질의와 셀프 조인
4. 서브쿼리
5. 그룹 함수
6. 윈도우 함수
7. DCL
8. 절차형 SQL
---
1. 데이터 모델의 이해
2. 엔터티
3. 속성
4. 관계
5. 식별자
6. 성능 데이터 모델링의 개요
7. 정규화와 성능
8. 반정규화와 성능
9. 대량 데이터에 따른 성능
10. 데이터베이스 구조와 성능
11. 분산 데이터베이스와 성능
---

ISNULL(column1), IFNULL(column1, anithing)