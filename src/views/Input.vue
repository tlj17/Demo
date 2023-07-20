<script setup>
    import {useTableStore} from '../store/index.js'
    import {useRoute} from 'vue-router'
    let store = useTableStore()
    const route=useRoute()
    import { reactive,onBeforeMount} from 'vue'

    //部门下拉框数据
    const options = [
  {
    value: '部门1',
    label: '部门1',
  },
  {
    value: '部门2',
    label: '部门2',
  },
  {
    value: '部门3',
    label: '部门3',
  },
]

//收集输入表单数据
  let form = reactive({
    name: '',
    birth: '',
    sex: '',
    phone:'',
    email:'',
    idNum:'',
    employeeId:'',
    startDate:'',
    department:'',
    position:''
})

    //判断收集的表单是否为空
    const isEmpty = ()=>{
        return Object.values(form).every(value => value === '');
    }
    //提交表单数据
    const onSubmit = ()=>{
        if(!isEmpty())
        {
            store.onSubmit(form)
            ElMessage({
                message: '添加表单信息成功！',
                type: 'success',
            })
        }else{//如果表单数据为空，给予警告
            ElMessageBox.alert('不能提交空表单！', 'Title', {
                confirmButtonText: 'OK',
            })

        }
    }  
    //保存修改
    const saveChange=()=>{
        ElMessageBox.confirm(
            '确认修改吗?',
            'Warning',
            {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning',
            }
            )
            .then(() => {
                store.saveChange(form,+route.query.index)
                ElMessage({
                 type: 'success',
                 message: '修改成功',
                })
            })
            .catch(() => {
                ElMessage({
                    type: 'info',
                    message: '取消修改',
                })
            })
       
    }
    //取消操作，把表单内容置空
    const cancel=()=>{
        Object.keys(form).forEach(key => {
             form[key] = '';
        });
    }
    //挂载前加载数据
    onBeforeMount(()=>{
        const index = +route.query.index
        Object.assign(form,store.tableData[index])
    })
  
</script>

<template>
    <el-card shadow="always">
        <h1 >个人信息</h1>
        <el-form :model="form" label-position="left" label-width="100px">
            <el-form-item label="姓名" >
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="出生日期" >
                <el-col :span="11">
                        <el-date-picker
                        v-model="form.birth"
                        type="date"
                        placeholder="Pick a Date"
                        format="YYYY/MM/DD"
                        value-format="YYYY-MM-DD"
                        />
                </el-col>
            </el-form-item>
            <el-form-item label="性别" >
                <el-radio-group v-model="form.sex">
                    <el-radio label="男" />
                    <el-radio label="女" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系电话" >
                <el-input v-model="form.phone"/>
            </el-form-item>
            <el-form-item label="邮箱" >
                <el-input v-model="form.email"/>
            </el-form-item>
            <el-form-item label="身份证号" >
                <el-input v-model="form.idNum"/>
            </el-form-item>
        </el-form>
    </el-card>
    <el-card shadow="always">
        <h1 >就业信息</h1>
        <el-form label-position="left" label-width="100px">
            <el-form-item label="工号" >
                <el-input v-model="form.employeeId"/>
            </el-form-item>
            <el-form-item label="入职日期" >
                <el-col :span="11">
                        <el-date-picker
                        v-model="form.startDate"
                        type="date"
                        placeholder="Pick a Date"
                        format="YYYY/MM/DD"
                        value-format="YYYY-MM-DD"
                        />
                </el-col>
            </el-form-item>
            <el-form-item label="所在部门" >
                <el-select  placeholder="Select" v-model="form.department">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="职位" >
                <el-input v-model="form.position"/>
            </el-form-item>
            <el-form-item>
                <template #default="scope">
                    <el-button type="primary" @click="onSubmit">新增</el-button>
                    <el-button type="primary" @click="saveChange">保存修改</el-button>
                    <el-button @click="cancel">取消/置空</el-button>
                </template>
            </el-form-item>
        </el-form>
    </el-card>
    
</template>

<style lang="less" scoped>
    .el-card{
        margin-top: 40px;
        h1{
            font-size: 25px;
            text-align: center;
            // margin-bottom: 20px;
            color: rgb(171, 160, 160);
        }
        .el-form{
            display: flex;
            flex-wrap: wrap;
            justify-content:space-around;
            .el-form-item{
                margin-left: 20px;
                margin-top: 25px;
                width: 45%;
                .el-input{
                    width: 250px;
                   
                }
            }
        }
    }
    
</style>


