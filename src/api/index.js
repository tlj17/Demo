import request from './request'

//提交输入数据
export const inputData = (data) => request({
    url:'/input',
    data,
    method:'post',
})

//获取信息列表
export const reqTableList = () => request({
    url:'/tablelist',
    method:'get'
})

//获取单条信息详情
export const reqViewInfo = (employeeId) => request({
    url:`/view/${employeeId}`,
    method:'get'
})

//删除单条信息
export const deleteInfo = (employeeId) => request({
    url:`/tablelist/${employeeId}`,
    method:'get'
})

//编辑信息
export const editInfo = (employeeId,data) =>request({
    url:`/input/${employeeId}`,
    data,
    method:'post'
})





