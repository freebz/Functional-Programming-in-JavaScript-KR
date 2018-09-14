// 코드 3-8 로대시JS로 만든 느긋한 함수 체인

_.chain(persons)
    .filter(isValid)
    .map(_.property('address.country'))
    .reduce(getherStats, {})
    .values()
    .sortBy('count')
    .reverse()
    .first()
    .value()
    .name; //-> 'US'
