function SelectList1(_Url, Object_Name) {
    var _select = $("#" + Object_Name + "");
    _select.html('');
    $.getJSON(_Url, function (data) {
        $.each(data, function (index, dataValue) {
            _select.append("<option value=\"" + dataValue.Value + "\">" + dataValue.Text + "</option>");
        })
    });
}

function SelectListClear1(Object_Name, first_value, first_text) {
    var _select = $("#" + Object_Name + "");
    _select.html('');
    _select.append("<option value=\"" + first_value + "\">" + first_text + "</option>");
}
function change_viloyat_tuzilma(_viloyat, _tuman, _maktab) {
    if ($("#" + _viloyat).val() > 0) {
        SelectList1("/List/StructureSystemByParentIDList?ParentID=" + $("#" + _viloyat).val(), _tuman);
    }
    else {
        SelectListClear1(_tuman, "NULL", "Tuman nomini tanlang");
    }
    SelectListClear1(_maktab, "NULL", "Muassasa nomini tanlang");
    validationBackrount(_viloyat, 0, _tuman, 0);
}

function change_tuman_tuzilma(_tuman, _maktab, _sector) {
    if ($("#" + _tuman).val() > 0) {
        if (_maktab != "0") SelectList1("/List/SchoolList?BoshqarmaID=" + $("#" + _tuman).val() + "&Sector=" + _sector, _maktab);
    }
    else {
        if (_maktab != "0") SelectListClear1(_maktab, "NULL", "Muassasa nomini tanlang");
    }
}

function change_AttractYear(s) {
    if ($("#AttractYear").val() > 0) {
        SelectList1("/List/AttractPeriodList?AttractYear=" + $("#AttractYear").val() + "&s=" + s, "AttractPeriod");
    }
    else {
        SelectListClear1("AttractPeriod", "NULL", "Tanlang");
    }
}


function change_yil(_y, _m, _d) {
    if ($("#" + _y).val() > 0) {
        SelectList1("/List/_OyList", _m);
        SelectListClear1(_d, "0", "--KUN--");
    }
    else {
        SelectListClear1(_m, "0", "--OY--");
        SelectListClear1(_d, "0", "--KUN--");
    }
    validationBackrount(_y, 0, _m, 0);
    validationBackrount(_d, 0);
}
function change_oy(_y, _m, _d) {
    if ($("#" + _m).val() > 0) {
        SelectList1("/List/_KunList?yil=" + $("#" + _y).val() + "&oy=" + $("#" + _m).val(), _d);
    }
    else {
        SelectListClear1(_d, "0", "--KUN--");
    }
    validationBackrount(_m, 0, _d, 0);
}


function validationBackrount(id, minValue, id2 = "", minValue2 = "") {
    var _val = $("#" + id).val().replace(',', '.');
    if (_val * 1 > minValue) {
        $('#' + id + '_1').find("select").each(function (idx, ele) {
            $(ele).data("select2").$container.find('.select2-selection')
                .css("background-color", "");
        });
    }
    else {
        $('#' + id + '_1').find("select").each(function (idx, ele) {
            $(ele).data("select2").$container.find('.select2-selection')
                .css("background-color", "rgb(255, 204, 204)");
        });
    }
    if (id2 != "") {
        if ($("#" + id2).val() > minValue2) {
            $('#' + id2 + '_1').find("select").each(function (idx, ele) {
                $(ele).data("select2").$container.find('.select2-selection')
                    .css("background-color", "");
            });
        }
        else {
            $('#' + id2 + '_1').find("select").each(function (idx, ele) {
                $(ele).data("select2").$container.find('.select2-selection')
                    .css("background-color", "rgb(255, 204, 204)");
            });
        }
    }
}

function ChangeRegion(tegRegion, tegDistrict) {
    if ($("#" + tegRegion).val() > 0) {
        SelectList1("/List/DistrictList?RegionID=" + $("#" + tegRegion).val(), tegDistrict);
        }
    else {
        SelectListClear1(tegDistrict, "NULL", "Tanlang");
        }
   
}

function ChangeStadyOfCountry(tegCountry, tegUniversity) {
    if ($("#" + tegCountry).val() > 0) {
        SelectList1("/List/UniversityList?CountryID=" + $("#" + tegCountry).val(), tegUniversity);
    }
    else {
        SelectListClear1(tegUniversity, "NULL", "Tanlang");
    }
}

function ChangeDropDown(url,teg1, teg2) {
    if ($("#" + teg1).val() > 0) {
        SelectList1(url + $("#" + teg1).val(), teg2);
    }
    else {
        SelectListClear1(teg2, "NULL", "Tanlang");
    }

}

function SelectDropDown(functionName, getValue, objectName) {
    var _select = $("#" + objectName + "");
    _select.html('');
    var _url = "/List/" + functionName + "/" + $("#" + getValue).val();
    $.getJSON(_url, function (data) {
        $.each(data, function (index, dataValue) {
            _select.append("<option value=\"" + dataValue.Value + "\">" + dataValue.Text + "</option>");
        })
    });
}



