<template>
    <div class="row text-center q-mt-xl q-mx-lg">
        <div class="col-12">
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        จำนวนผู้เข้าเกณฑ์เครียด วิตกกังวล เศร้า
                    </div>
                </div>
                <div class="col-12 q-my-md">
                    <div class="text text-h6">
                        นับเฉพาะผู้ทดลองที่ได้เกณฑ์การประเมินตั้งแต่ ระดับปานกลางขึ้นไป (ก่อนใช้ระบบ) 
                    </div>
                </div>
            </div>
            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h5 text-bold">
                        จำนวนผู้เข้าระบบ: 
                            <span class="text-h3 text-bold" style="color: #64AF65;">
                                {{ userAmount }}
                            </span>
                    </div>
                </div>
            </div>
            <div class="row q-my-lg flex flex-center">
                <div class="col-12 col-md-3 q-my-lg">
                    <q-circular-progress
                    show-value
                    class="text-black text2 text-bold"
                    :value="depressAmount"
                    :max="userAmount"
                    size="30vh"
                    color="pink-4"
                    :thickness="0.3"
                    track-color="grey-9"
                    /> 
                    <div class="text text-h5 text-bold q-my-lg">
                        คนที่มีภาวะความเศร้า
                    </div>
                </div>
                <div class="col-12 col-md-3 q-my-lg">
                    <q-circular-progress
                    show-value
                    class="text-black text2 text-bold"
                    :value="anxietyAmount"
                    :max="userAmount"
                    size="30vh"
                    color="green-4"
                    :thickness="0.3"
                    track-color="grey-9"
                    /> 
                    <div class="text text-h5 text-bold q-my-lg">
                        คนที่มีภาวะความวิตกกังวล
                    </div>
                </div>
                <div class="col-12 col-md-3 q-my-lg">
                    <q-circular-progress
                    show-value
                    class="text-black text2 text-bold"
                    :value="stressAmount"
                    :max="userAmount"
                    size="30vh"
                    color="cyan-4"
                    :thickness="0.3"
                    track-color="grey-9"
                    /> 
                    <div class="text text-h5 text-bold q-my-lg">
                        คนที่มีภาวะความเครียด
                    </div>
                </div>
            </div>

            <div class="row q-my-lg">
                <div class="col-12">
                    <div class="text text-h4 text-bold">
                        ตารางแสดงผลผู้ใช้งานทั้งหมดในระบบ
                    </div>
                </div>
                <div class="col-12 q-my-lg">
                    <q-table
                    flat bordered
                    title="All Users Data"
                    :rows="rows"
                    :columns="columns"
                    color="primary"
                    row-key="Name"
                    class="text2"
                    >
                        <template v-slot:top-right>
                            <q-btn
                            color="primary"
                            icon-right="archive"
                            label="Export to csv"
                            no-caps
                            @click="exportTable"
                            :disable="!rows"
                            />
                        </template>
                    </q-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import FirestoreHandle from '@/composables/FirestoreHandle';
import { exportFile, useQuasar } from 'quasar'

export default {
    setup () {
        const userAmount = ref(null)
        const depressAmount = ref()
        const anxietyAmount = ref()
        const stressAmount = ref()

        const columns = ref(
            [
                { name: 'No', align: 'center', label: 'No', field: 'No', sortable: true },
                { name: 'Name', label: 'Name', align: 'left', field: 'Name', sortable: true },
                { name: 'Gender', align: 'center', label: 'Gender', field: 'Gender', sortable: true },
                { name: 'Age', label: 'Age', field: 'Age', sortable: true },
                { name: 'StudyYear', label: 'Study Year', field: 'StudyYear' },
                { name: 'School', label: 'School of', field: 'School' },
                { name: 'userCode', label: 'Money Code', field: 'userCode' },
                { name: 'PreDepressScore', label: 'Pre-Depress Score', field: 'PreDepressScore' },
                { name: 'PreAnxietyScore', label: 'Pre-Anxiety Score', field: 'PreAnxietyScore', sortable: true },
                { name: 'PreStressScore', label: 'Pre-Stress Score', field: 'PreStressScore', sortable: true },
                { name: 'PostDepressScore', label: 'Post-Depress Score', field: 'PostDepressScore' },
                { name: 'PostAnxietyScore', label: 'Post-Anxiety Score', field: 'PostAnxietyScore', sortable: true },
                { name: 'PostStressScore', label: 'Post-Stress Score', field: 'PostStressScore', sortable: true },

                { name: 'AICommentQ1', label: 'AI Comment Question1', field: 'AICommentQ1', sortable: true },
                { name: 'AICommentQ2', label: 'AI Comment Question2', field: 'AICommentQ2', sortable: true },
                { name: 'AICommentQ3', label: 'AI Comment Question3', field: 'AICommentQ3', sortable: true },
                { name: 'AICommentQ4', label: 'AI Comment Question4', field: 'AICommentQ4', sortable: true },
                { name: 'AICommentQ5', label: 'AI Comment Question5', field: 'AICommentQ5', sortable: true },
                { name: 'AICommentQ6', label: 'AI Comment Question6', field: 'AICommentQ6', sortable: true },
                { name: 'AICommentQ7', label: 'AI Comment Question7', field: 'AICommentQ7', sortable: true },
                { name: 'AICommentQ8', label: 'AI Comment Question8', field: 'AICommentQ8', sortable: true },
                { name: 'AICommentQ9', label: 'AI Comment Question9', field: 'AICommentQ9', sortable: true },
                { name: 'AICommentQ11', label: 'AI Comment Question11', field: 'AICommentQ11', sortable: true },
                { name: 'AICommentQ12', label: 'AI Comment Question12', field: 'AICommentQ12', sortable: true },
                { name: 'AICommentQ13', label: 'AI Comment Question13', field: 'AICommentQ13', sortable: true },

                { name: 'Comment', label: 'AI Comment', field: 'Comment', sortable: true },
                { name: 'PostSatisfaction', label: 'Content Satisfy Score', field: 'PostSatisfaction', sortable: true },
            ]
        )

        const rows = ref()

        const { getDocData, getRoundData, currentUser, getEmotionalData, getAllDataToTable } = FirestoreHandle()

        watch(currentUser, (newValue, oldValue) => {
           if(newValue)
           {
            GetOverallData()
            GetTableData()
           }
        })

        const GetOverallData = async () => {
            const emotionData = await getEmotionalData("OverallScore")
            userAmount.value = emotionData.length
            
            let anxAmn = 0, dpsAmn = 0, stsAmn = 0;

            emotionData.forEach(indexData => {
                if(indexData.AnxietyScore >= 14)
                {
                    anxAmn++
                }

                if(indexData.DepressionScore >= 14)
                {
                    dpsAmn++
                }

                if(indexData.StressScore >= 14)
                {
                    stsAmn++
                }

            })

            anxietyAmount.value = anxAmn
            depressAmount.value = dpsAmn
            stressAmount.value = stsAmn
        }

        const GetTableData = async () => {
            const tableData = await getAllDataToTable()
            rows.value = tableData
        }

        const exportTable = () => {
              // naive encoding to csv format
              let content 
              
                content = [columns.value.map(col => wrapCsvValue(col.label))].concat(
                    rows.value.map(row => columns.value.map(col => wrapCsvValue(
                    typeof col.field === 'function'
                        ? col.field(row)
                        : row[ col.field === void 0 ? col.name : col.field ],
                    col.format,
                    row
                    )).join(','))
                ).join('\r\n')

                const blob = new Blob([`\ufeff${content}`], { type: 'text/csv;charset=utf-8;' })
                const url = URL.createObjectURL(blob)

                const link = document.createElement('a')
                link.setAttribute('href', url)
                link.setAttribute('download', `VirtualInfluencer-UserData.csv`)
                link.style.visibility = 'hidden'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)

            //   if (link !== true) {
            //     $q.notify({
            //       message: 'Browser denied file download...',
            //       color: 'negative',
            //       icon: 'warning'
            //     })
            //   }
        }

        const wrapCsvValue = (val, formatFn, row) => {
            let formatted = formatFn !== void 0
                ? formatFn(val, row)
                : val

            formatted = formatted === void 0 || formatted === null
                ? ''
                : String(formatted)

            formatted = formatted.split('"').join('""')
            /**
             * Excel accepts \n and \r in strings, but some other CSV parsers do not
             * Uncomment the next two lines to escape new lines
             */
            // .split('\n').join('\\n')
            // .split('\r').join('\\r')

            return `"${formatted}"`
        }

        return {columns, rows, exportTable, userAmount, depressAmount, anxietyAmount, stressAmount}
    }
}
</script>

<style lang="scss" scoped>

</style>