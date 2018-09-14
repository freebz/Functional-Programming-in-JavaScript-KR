// 코드 3-3 국가별 인구 계산

_(person).reduce((stat, person) => {
    const country = person.address.country;
    stat[country] = _.isUndefined(stat[country]) ? 1 : stat[country] + 1;
    return stat;
}, {});
