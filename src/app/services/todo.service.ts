import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

    tasks = [
        {
            id: 1,
            name: 'Eric',
            activity: 'test etvdshfbkb sdm lmdnfsdf',
            date: '2021-01-05',
            status: 'completed',
        },
        {
            id: 2,
            name: 'Eric',
            activity: 'test etvdshfbkb sdm lmdnfsdf',
            date: '2021-01-05',
            status: 'processing',
        }
    ];

    poductivity = {
        total: 0,
        completed: 0
    }

    baseApi = 'http://localhost:8000/api/v1/todo';

    constructor (private httpClient: HttpClient) {
    }

    getTasks() {

        const datas =  this.httpClient.get(this.baseApi + '/lists' );

        console.log(datas);
        // this.tasks = datas.tasks;
        // return datas;
        return this.tasks;
    }

    create (name: string, activity: string, date: string) {

        const task = {
            id: 0,
            name: '',
            activity: '',
            date: '',
            status: 'processing',
        }

        task.name = name;
        task.activity = activity;
        task.date = date;
        task.status = 'date';
        task.id = this.tasks[(this.tasks.length - 1)].id + 1;
        this.tasks.push(task);

        const insert =  this.httpClient
            .post(this.baseApi + '/create', JSON.stringify(task))
            .subscribe(
                () => {
                    console.log('Enregistrement terminer');
                },
                (error) => {
                    console.log("Erreur de sauvegarde: " + error);
                }
            );
        console.log(insert);
    }

    completed (id: number) {

    }

    delete (id: number) {

    }

    productivities () {

        let completed = 0;
        this.tasks.forEach(task => {

            if (task.status === 'completed') {
                
                completed++;
            }
        });

        this.poductivity.completed = completed;
        this.poductivity.total = this.tasks.length;
        return this.poductivity;
    }   
}