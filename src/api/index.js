import service from "@/axios.js";

// 查询config
export function queryConfig() {
  return service({
    method: "get",
    url: `/sysArea/getConfig`
  });
}


// 查询可配置变比的企业列表
export function queryRateConfigEntLists(params, headers) {
  return service({
    method: "post",
    url: `/rate/queryRateConfigEntLists`,
    params,
    headers
  });
}
// 查询测点倍率变更记录
export function queryRateConfigRecordLists(params, headers) {
  return service({
    method: "post",
    url: `/rate/queryRateConfigRecordLists`,
    data: params,
    headers
  });
}
// 保存修改记录
export function saveRateConfig(params, headers) {
  return service({
    method: "post",
    url: `/rate/saveRateConfig`,
    data: params,
    headers
  });
}
// let params = {
//   constant: this.option.ctConstant,
//   deviceId: this.option.id,
//   factor: this.number,
//   hoursLater: this.timeValue,
//   operator: "123"
// };
// let header = {
//   ticket: "123456",
//   simulate: "1",
//   entId: this.entId
// };
// saveRateConfig(params, header).then(res => {
//   if (res.data.code == 200) {
//     this.$router.push({
//       path: "/scalePage"
//     });
//   }
// });
// 判断企业是否为运维商
export function queryEntIsOperatorEnt(params, headers) {
  return service({
    method: "post",
    url: `/power/report/queryEntIsOperatorEnt`,
    params: params,
    headers
  });
}
// let params = {
//   systemCode: "PARK172_EMS01",
//   entId: "1254589969461145601"
// };
// let header = {
//   ticket: "123456",
//   simulate: "1"
// };
// queryEntIsOperatorEnt(params, header).then(res => {
//   // console.log(res);
//   if (res.data.code === 200) {
//     this.operatorEnt = res.data.data.operatorEnt;
//     this.queryRateConfigEntLists();
//   }
// });
