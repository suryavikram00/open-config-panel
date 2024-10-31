
import { Injectable } from '@angular/core';
import { TableMetaData } from './table-meta-data';
import { EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) export class DbTableConfig {

    tableMetaDataArray: TableMetaData[];

    constructor() {
        this.tableMetaDataArray = [
            {
                tableName: 'config',
                tableviewName: 'CONFIG',
                tableApiName: 'config',
                serverPaginationEnabled: false,
                searchColumn : [],
                tableColumn : [],
                exportEnabled: false,
                accreditionEnabled : false,
                edit: {
                    enabled: true,
                    column: ['value']
                },
                create: {
                    enabled: false,
                    column: []
                }

            }
        ];
    }

    public getTableMetaDataArray(): TableMetaData[] {
        console.log("getFilter in config table filter");
        return Object.assign([], this.tableMetaDataArray);
    }

    public getTableMetaDataByApi(apiName: string): TableMetaData {
        // this needs to be looked again #revisit
        let selectedTableMetaData: TableMetaData = this.tableMetaDataArray[0];
        for (let i = 0; i < this.tableMetaDataArray.length; i++) {
            if (this.tableMetaDataArray[i].tableApiName == apiName) {
                selectedTableMetaData = this.tableMetaDataArray[i];
            }
        }
        return Object.assign({}, selectedTableMetaData);
    }

    public getTableMetaDataByTableName(tableName: string): TableMetaData {
        // this needs to be looked again #revisit
        let selectedTableMetaData: TableMetaData = this.tableMetaDataArray[0];
        for (let i = 0; i < this.tableMetaDataArray.length; i++) {
            if (this.tableMetaDataArray[i].tableApiName == tableName) {
                selectedTableMetaData = this.tableMetaDataArray[i];
            }
        }
        return Object.assign({}, selectedTableMetaData);
    }

}