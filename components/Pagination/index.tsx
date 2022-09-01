import React from 'react'
import Pagination from '@material-ui/lab/Pagination/'

interface IPropsComponent {
    handleChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined;
    page: number;
    total_pages: number;
}