// 코드 3-9 자바스크립트를 SQL 비슷하게 작성하기

_.from(persons)
    .where(p => p.birthYear > 1900 && p.address.country !== 'US')
    .sortBy(['firstname'])
    .select(p => p.firstname)
    .value();
