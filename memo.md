https://tinted-gym-f99.notion.site/Fullstack-course-notes-Students-3202660c315b438aba6c1ae051963572
# Prisma

Prisma Level에서 relation 정하기 -> relation fields를 이용하여 relation을 구성한다.
Artist와 Song의 relation type

3가지의 relation type
  1. 1:1
  2. 1:n
  3. n:n

How to express relation in Prisma ? 
Prisma Schma에서 relation을 설정. Prisma에서 relation은 두 가지로 구성
  1. relation fields
  2. id reference

relational database에서는 primary key와 foreign key를 이용하여 relation을 구성한다.

model에서 정의한 relation과 관련된 필드는 실제로 데이터베이스에서는 존재하지 않는 필드. - prisma level

```

# type of relation - 1:n

model User {
  posts Post[]
}

model Post {

  author User @relation(fields: [authorId], references: [id])
  authorId Int # this points to User.id
}

```


createMany and Promise.all


