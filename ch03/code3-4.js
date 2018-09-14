// 코드 3-4 map과 reduce를 조합하여 통계치를 산출

const getCountry = person => person.address.country;

const gatherStats = function (stat, criteria) {
    stat[criteria] = _.isUndefined(stat[criteria]) ? 1 :
	stat[criteria] + 1;
    return stat;
};

_(person).map(getCountry).reduce(getherStatus, {});
