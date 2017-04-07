/**
 * Save data temporarily to move between pages
 * Put StorageService in app.module to make it singleton between different pages/routes
 */

import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    private data: any = {};

    constructor() { }

    deleteData(key: string): void {
        delete this.data[key];
    }

    setData(key: string, data: any): void {
        this.data[key] = data;
    }

    getData(key: string): any {
        if(this.data.hasOwnProperty(key)) {
            return this.data[key];
        } else {
            return null;
        }
    }

    getAllData(): any {
        return this.data;
    }
}
