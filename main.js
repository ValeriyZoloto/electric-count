//===============================================================================================//
//Находим все инпуты Показания сейчас

//Общий день
let comonResDayNaw = document.querySelector("#receptionInputGeneralDayNow");
//Oбщий остаток день
let comonBalanceDay = document.querySelector("#flutCountDay");
//Общий добавляемый коэффициент день
let comonBalanceDay1 = document.querySelector("#flutCountDay1");
//Общий Ночь
let comonResNightNaw = document.querySelector("#receptionInputGeneralNightNow");
//Oбщий остаток ночь
let comonBalanceNight = document.querySelector("#flutCountNight");
//Общий добавляемый коэффициент ночь
let comonBalanceNight1 = document.querySelector("#flutCountNight1");
//Валерий день
let valeriyResDayNaw = document.querySelector("#receptionInputValeriyDayNow");
//Валерий ночь
let valeriyResNightNaw = document.querySelector("#receptionInputValeriyNightNow");
//Надя день
let nadyaResDayNaw = document.querySelector("#receptionInputNadyaDayNow");
//Надя ночь
let nadyaResNightNaw = document.querySelector("#receptionInputNadyaNightNow");
//Юрий общий
let juriyResComonNaw = document.querySelector("#receptionInputJuriyGeneralNow");
//Михаил общий
let mikhailResComonNaw = document.querySelector("#receptionInputMikhailGeneralNow");

//===============================================================================================//

//Находим все инпуты Показания прошлый месяц

//Общий день
let comonResDayLastMonth = document.querySelector("#receptionInputGeneralDayYesterday");
//Общий Ночь
let comonResNightLastMonth = document.querySelector(
	"#receptionInputGeneralNightYesterday"
);

//Валерий день
let valeriyResDayLastMonth = document.querySelector("#receptionInputValeriyDayYesterday");
//Валерий ночь
let valeriyResNightLastMonth = document.querySelector(
	"#receptionInputValeriyNightYesterday"
);
//Надя день
let nadyaResDayLastMonth = document.querySelector("#receptionInputNadyaDayYesterday");
//Надя ночь
let nadyaResNightLastMonth = document.querySelector("#receptionInputNadyaNightYesterday");
//Юрий общий
let juriyResComonLastMonth = document.querySelector(
	"#receptionInputJuriyGeneralYesterday"
);
//Михаил общий
let mikhailResComonLastMonth = document.querySelector(
	"#receptionInputMikhailGeneralYesterday"
);
//===============================================================================================//

//Находим кнопку
const button = document.querySelector("#count");

//===============================================================================================//
//====================НАХОДИМ СПАНЫ КУДА БУДУТ ВЫВОДИТСЯ ПОДСЧЕТЫ================================//

// Общий день span расчетных данных
let calcDayCommon = document.querySelector("#flutResDay");
// Общий ночь span расчетных данных
let calcNightCommon = document.querySelector("#flutResNight");

//Валерий день span расчетных данных
let calcDayValeriy = document.querySelector("#valeriyResDay");
//Валерий ночь span расчетных данных
let calcNightValeriy = document.querySelector("#valeriyResNight");

//Надя день span расчетных данных
let calcDayNadya = document.querySelector("#nadyaResDay");
//Надя ночь span расчетных данных
let calcNightNadya = document.querySelector("#nadyaResNight");

//Юрий день span расчетных данных
let calcDayJuriy = document.querySelector("#juriyResDay");
//Юрий ночь span расчетных данных
let calcNightJuriy = document.querySelector("#juriyResNight");

//Михаил день span расчетных данных
let calcDayMikhail = document.querySelector("#mikhailResDay");
//Михаил ночь span расчетных данных
let calcNightMikhail = document.querySelector("#mikhailResNight");

//:::::::::::::::::::::::::::::::::::::::::::::ДЕНЬ ВСЯ КВАРТИРА :::::::::::::::::::::::::::::::::::::::
//Показания счетчика всей квартиры днем в этом месяце
let commonDayNow = Number(26886);
// console.log(`Показания счетчика всей квартиры днем в этом месяце ${commonDayNow}`);

//Показания счетчика всей квартиры днем в прошлом месяце
let commonDayLastMonth = Number(26734);
// console.log(
// 	`Показания счетчика всей квартиры днем в прошлом месяце ${commonDayLastMonth}`
// );

//Сколько эл-ва вся квартира сожгла днем
let commonDay = commonDayNow - commonDayLastMonth;
// console.log(`Сколько эл-ва вся квартира сожгла днем ${commonDay}`);
// console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::::::::::::::::::::::НОЧЬ ВСЯ КВАРТИРА :::::::::::::::::::::::::::::::::::::::
//Показания счетчика всей квартиры ночью в этом месяце
let commonNightNow = Number(11010);
// console.log(`Показания счетчика всей квартиры ночью в этом месяце ${commonNightNow}`);

//Показания счетчика всей квартиры ночью в прошлом месяце
let commonNightLastMonth = Number(10963);
// console.log(
// 	`Показания счетчика всей квартиры ночью в прошлом месяце ${commonNightLastMonth}`
// );

//Сколько эл-ва вся квартира сожгла ночью
let commonNight = commonNightNow - commonNightLastMonth;
// console.log(`Сколько эл-ва вся квартира сожгла ночью ${commonNight}`);
// console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::::::::::::::::::::::ПРЕДВАРИТЕЛЬНЫЙ ПОДСЧЕТ ЖИЛЬЦОВ :::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::::::::::::::::::::::ПРЕДВАРИТЕЛЬНЫЙ ПОДСЧЕТ ВАЛЕРИЯ  :::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::ДЕНЬ:::::::::::::::::::::::::::::::::::::::
//Показания счетчика Валерия днем в этом месяце
let ValeriyDayNow = Number(3739);
// console.log(`Показания счетчика Валерия днем этом месяце ${ValeriyDayNow}`);

//Показания счетчика всей Валерия днем в прошлом месяце
let ValeriyDayLastMonth = Number(3739);
// console.log(`Показания счетчика Валерия днем в прошлом месяце ${ValeriyDayLastMonth}`);

//Предварительный  подсчет израсходованного эл-ва Валерия днем
let ValeriyDayPreviously = ValeriyDayNow - ValeriyDayLastMonth;
// console.log(
// 	`Предварительный  подсчет израсходованного эл-ва Валерия днем  ${ValeriyDayPreviously}`
// );
//:::::::::::::::::::::::::::::::::::::::::::::НОЧЬ:::::::::::::::::::::::::::::::::::::::
//Показания счетчика Валерия ночью в этом месяце
let ValeriyNightNow = Number(1732);
// console.log(`Показания счетчика Валерия ночью этом месяце ${ValeriyNightNow}`);

//Показания счетчика всей Валерия ночью в прошлом месяце
let ValeriyNightLastMonth = Number(1732);
// console.log(`Показания счетчика Валерия ночью в прошлом месяце ${ValeriyNightLastMonth}`);

//Предварительный  подсчет израсходованного эл-ва Валерия ночью
let ValeriyNightPreviously = ValeriyNightNow - ValeriyNightLastMonth;
// console.log(
// 	`Предварительный  подсчет израсходованного эл-ва Валерия ночью  ${ValeriyNightPreviously}`
// );
// console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::::::::::::::::::::::ПРЕДВАРИТЕЛЬНЫЙ ПОДСЧЕТ НАДИ  :::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::ДЕНЬ:::::::::::::::::::::::::::::::::::::::
//Показания счетчика Нади днем в этом месяце
let NadyaDayNow = Number(5263);
// console.log(`Показания счетчика Нади днем этом месяце ${NadyaDayNow}`);

//Показания счетчика всей Нади днем в прошлом месяце
let NadyaDayLastMonth = Number(5213);
// console.log(`Показания счетчика Нади днем в прошлом месяце ${NadyaDayLastMonth}`);

//Предварительный  подсчет израсходованного эл-ва Нади днем
let NadyaDayPreviously = NadyaDayNow - NadyaDayLastMonth;
// console.log(
// 	`Предварительный  подсчет израсходованного эл-ва Нади днем  ${NadyaDayPreviously}`
// );
//:::::::::::::::::::::::::::::::::::::::::::::НОЧЬ:::::::::::::::::::::::::::::::::::::::
//Показания счетчика Нади ночью в этом месяце
let NadyaNightNow = Number(1492);
// console.log(`Показания счетчика Нади ночью этом месяце ${NadyaNightNow}`);

//Показания счетчика всей Нади ночью в прошлом месяце
let NadyaNightLastMonth = Number(1481);
// console.log(`Показания счетчика Нади ночью в прошлом месяце ${NadyaNightLastMonth}`);

//Предварительный  подсчет израсходованного эл-ва Нади ночью
let NadyaNightPreviously = NadyaNightNow - NadyaNightLastMonth;
// console.log(
// 	`Предварительный  подсчет израсходованного эл-ва Нади ночью  ${NadyaNightPreviously}`
// );
// console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::::::::::::::::::::::ПРЕДВАРИТЕЛЬНЫЙ ПОДСЧЕТ ЮРИЯ  :::::::::::::::::::::::::::::::::::::::
//Показания счетчика Юрия  в этом месяце
let JuriyNow = Number(14134);
// console.log(`Показания счетчика Юрия  в этом месяце ${JuriyNow}`);

//Показания счетчика Юрия  в прошлом месяце
let JuriyLastMonth = Number(14078);
// console.log(`Показания счетчика Юрия  в прошлом месяце ${JuriyLastMonth}`);
//Предварительный  подсчет израсходованного эл-ва Юрия
let JuriyPreviously = JuriyNow - JuriyLastMonth;
// console.log(`Предварительный  подсчет израсходованного эл-ва Юрия ${JuriyPreviously}`);

//Предварительный  подсчет израсходованного эл-ва Юрия днем
let JuriyDayPreviously = (JuriyPreviously / 3) * 2;
// console.log(
// 	`Предварительный  подсчет израсходованного эл-ва Юрия днем ${Math.round(JuriyDayPreviously)}`
// );

//Предварительный  подсчет израсходованного эл-ва Юрия ночью
let JuriyNightPreviously = JuriyPreviously - JuriyDayPreviously;
// console.log(
// 	`Предварительный  подсчет израсходованного эл-ва Юрия ночью ${Math.round(JuriyNightPreviously)}`
// );
// console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::::::::::::::::::::::ПРЕДВАРИТЕЛЬНЫЙ ПОДСЧЕТ МИХАИЛА  :::::::::::::::::::::::::::::::::::::::
//Показания счетчика Михаила  в этом месяце
let MikhailNow = Number(8500);
// console.log(`Показания счетчика Михаила  в этом месяце ${MikhailNow}`);

//Показания счетчика Михаила  в прошлом месяце
let MikhailLastMonth = Number(8433);
// console.log(`Показания счетчика Михаила  в прошлом месяце ${MikhailLastMonth}`);
//Предварительный  подсчет израсходованного эл-ва Михаила
let MikhailPreviously = MikhailNow - MikhailLastMonth;
// console.log(`Предварительный  подсчет израсходованного эл-ва Михаила ${MikhailPreviously}`);

//Предварительный  подсчет израсходованного эл-ва Михаила днем
let MikhailDayPreviously = (MikhailPreviously / 3) * 2;
// console.log(
// 	`Предварительный  подсчет израсходованного эл-ва Михаила днем ${Math.round(MikhailDayPreviously)}`
// );

//Предварительный  подсчет израсходованного эл-ва Михаила ночью
let MikhailNightPreviously = MikhailPreviously - MikhailDayPreviously;
// console.log(
// 	`Предварительный  подсчет израсходованного эл-ва Михаила ночью ${Math.round(MikhailNightPreviously)}`
// );
// console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::::::::::::::::::::::ПРЕДВАРИТЕЛЬНЫЙ ПОДСЧЕТ ОСТАТКА КВАРТИРЫ  ::::::::::::::::::::::::::::::
//Предварительный  подсчет остатка квартиры днем
let commonDayLeftPreviously =
	commonDay -
	ValeriyDayPreviously -
	NadyaDayPreviously -
	JuriyDayPreviously -
	MikhailDayPreviously;
// console.log(
// 	`Предварительный  подсчет остатка квартиры днем ${Math.round(commonDayLeftPreviously)}`
// );

//Предварительный  подсчет остатка квартиры ночью
let commonNightLeftPreviously =
	commonNight -
	ValeriyNightPreviously -
	NadyaNightPreviously -
	JuriyNightPreviously -
	MikhailNightPreviously;
// console.log(
// 	`Предварительный  подсчет остатка квартиры ночью ${Math.round(commonNightLeftPreviously)}`
// );
if (commonNightLeftPreviously < 0) {
	//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//:::::::::::::::::::::::::::::::::::::::::::::ПРЕДВАРИТЕЛЬНЫЙ ПОДСЧЕТ ОСТАТКА ЕСЛИ ОСТАТОК НОЧЬЮ ОТРИЦАТЕЛЬНЫЙ  ::::::::::::::::::::::::::::::

	let previouslyCoef = (commonNightLeftPreviously * -1) / 2;
	// console.log(`Получаемый коэфициент ${Math.round(previouslyCoef)}`);

	let JuriyIntermediaryDay = JuriyDayPreviously + previouslyCoef;
	// console.log(`Юрий промежуточный день ${Math.round(JuriyIntermediaryDay)}`);

	let MikhailIntermediaryDay = MikhailDayPreviously + previouslyCoef;
	// console.log(`Михаил промежуточный день ${Math.round(MikhailIntermediaryDay)}`);

	let JuriyIntermediaryNight = JuriyNightPreviously - previouslyCoef;
	// console.log(`Юрий промежуточный ночь ${Math.round(JuriyIntermediaryNight)}`);

	let MikhailIntermediaryNight = MikhailNightPreviously - previouslyCoef;
	// console.log(`Михаил промежуточный ночь ${Math.round(MikhailIntermediaryNight)}`);

	// console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

	//::::::::::::::::::::::::::ОКОЧАТЕЛЬНОЕ ПОЛУЧЕНИЕ ОБЩЕГО ОСТАТКА ДЕНЬ:::::::::::::::::::::::::::::::::::::::

	//Остаток окончательный день
	let dayLeftFinish =
		commonDay -
		ValeriyDayPreviously -
		NadyaDayPreviously -
		JuriyIntermediaryDay -
		MikhailIntermediaryDay;

	console.log(`Остаток окончательный день ${dayLeftFinish}`);

	//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//::::::::::::::::::::::::::ОКОЧАТЕЛЬНОЕ ПОЛУЧЕНИЕ ОБЩЕГО ОСТАТКА НОЧЬ:::::::::::::::::::::::::::::::::::::::
	//Остаток окончательный ночь
	let nightLeftFinish =
		commonNight -
		ValeriyNightPreviously -
		NadyaNightPreviously -
		JuriyIntermediaryNight -
		MikhailIntermediaryNight;

	console.log(`Остаток окончательный ночь ${nightLeftFinish}`);
	console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

	//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	//:::::::::::::::ПОЛУЧАЕМ ДОБАВЛЯЕМОЕ ЧИСЛО КАЖДОМУ ЖИЛЬЦУ:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	if (ValeriyDayNow === ValeriyDayLastMonth);
	let dayNumPlus = dayLeftFinish / 3;
	console.log(`ДОБАВЛЯЕМОЕ ЧИСЛО КАЖДОМУ ЖИЛЬЦУ ДНЕМ ${Math.round(dayNumPlus)}`);

	let nightNumPlus = nightLeftFinish / 3;
	console.log(`ДОБАВЛЯЕМОЕ ЧИСЛО КАЖДОМУ ЖИЛЬЦУ НОЧЬЮ ${Math.round(nightNumPlus)}`);

	console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

	//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//:::::::::::::::ПОЛУЧАЕМ ОКОНЧАТЕЛЬНЫЙ РАСЧЕТ ЖИЛЬЦОВ ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	console.log(`Сколько эл-ва вся квартира сожгла днем ${commonDay}`);
	console.log(`Сколько эл-ва вся квартира сожгла ночью ${commonNight}`);
	console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

	if (ValeriyDayNow === ValeriyDayLastMonth) {
		//Валерий день
		let ValeriyFinishDay = ValeriyDayPreviously;
		console.log(`Валерий день окончательный расчет ${ValeriyFinishDay}`);
	} else {
		ValeriyFinishDay = Math.round(ValeriyDayPreviously + dayNumPlus);
		console.log(`Валерий день окончательный расчет ${ValeriyFinishDay}`);
	}

	if (ValeriyNightNow === ValeriyNightLastMonth) {
		//Валерий ночь
		let ValeriyFinishNight = ValeriyNightPreviously;
		console.log(`Валерий ночь окончательный расчет ${ValeriyFinishNight}`);
	} else {
		ValeriyFinishNight = Math.round(ValeriyNightPreviously + nightNumPlus);
		console.log(`Валерий ночь окончательный расчет ${ValeriyFinishNight}`);
	}

	console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

	//Надя день
	let NadyaFinishDay = Math.round(NadyaDayPreviously + dayNumPlus);
	console.log(`Надя день окончательный расчет ${NadyaFinishDay}`);
	//Надя ночь
	let NadyaFinishNight = Math.round(NadyaNightPreviously + nightNumPlus);
	console.log(`Надя ночь окончательный расчет ${NadyaFinishNight}`);

	console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

	//Юрий день
	let JuriyFinishDay = Math.round(JuriyIntermediaryDay + dayNumPlus);
	console.log(`Юрий день окончательный расчет ${JuriyFinishDay}`);
	//Юрий ночь
	let JuriyFinishNight = Math.round(JuriyIntermediaryNight + nightNumPlus);
	console.log(`Юрий ночь окончательный расчет ${JuriyFinishNight}`);

	console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

	//Михаил день
	let MikhailFinishDay = Math.round(MikhailIntermediaryDay + dayNumPlus);
	console.log(`Михаил день окончательный расчет ${MikhailFinishDay}`);
	//Михаил ночь
	let MikhailFinishNight = Math.round(MikhailIntermediaryNight + nightNumPlus);
	console.log(`Михаил ночь окончательный расчет ${MikhailFinishNight}`);

	console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
} else {
}
