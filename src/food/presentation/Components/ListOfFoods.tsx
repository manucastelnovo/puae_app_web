// 'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Title,
    Badge

} from '@tremor/react';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import {  deleteFoodById } from '../../data/store/slices';
import { FoodId } from '../../domain/model';



export default function ListOfFood() {
    const foods = useAppSelector((state) => state.foods)
    const dispatch = useAppDispatch();

    const handleRemoveFood = (id: FoodId) => {
        dispatch(deleteFoodById(id))
    }

    return (
        <>
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
                <div>
                    <Title>Foods</Title>
                    <Badge>{foods.length}</Badge>
                </div>
                <button
                    type="button"
                    className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
                >
                    Add workspace
                </button>
            </div>
            <Table className="mt-8">
                <TableHead>
                    <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Id
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Nombre
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Email
                        </TableHeaderCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {foods.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                {item.id}
                            </TableCell>
                            <TableCell>
                                <img style={{ width: "32px" }} src={`https://unavatar.io/github/${item.profit}`} />
                            </TableCell>
                            <TableCell>{item.foodName}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>
                                <button onClick={() => { handleRemoveFood(item.id) }} className='mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                </button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
