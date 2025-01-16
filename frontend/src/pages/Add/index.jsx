import * as yup from 'yup';
import Helmet from "react-helmet"
import React from 'react';
import Table from 'react-bootstrap/Table';
import { RiDeleteBin3Line } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDeleteShopperMutation, useGetShoppersQuery, usePostShopperMutation } from '../../rtk query/slice';

const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    price: yup.number().required("Required").positive(),
    description: yup.string().required("Required"),
    image: yup.string().url().required("Required")
});


export default function AddPage() {
    let { data, refetch, isLoading } = useGetShoppersQuery()
    let [postShopper] = usePostShopperMutation()
    let [deleteShopper] = useDeleteShopperMutation()

    const handleDelete = async (item) => {
        await deleteShopper(item._id)
        refetch()
    }

    return (
        <>
            <Helmet>
                <title>Add Form</title>
            </Helmet>
            <>
                <div className="container">
                    {
                        isLoading ? (
                            <h1>...Loading</h1>
                        ) : (
                            <>
                                <div className='add-form-wrap'>
                                    <Formik
                                        initialValues={{ name: '', description: '', price: null, image: '' }}
                                        validationSchema={validationSchema}
                                        onSubmit={async (values) => {
                                            await postShopper(values)
                                            refetch()
                                        }}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form className='add-form'>
                                                <Field type="text" name="name" placeholder="Enter name" className="field" />
                                                <ErrorMessage name="name" component="div" />
                                                <Field type="text" name="description" placeholder="Enter description" className="field" />
                                                <ErrorMessage name="description" component="div" />
                                                <Field type="number" name="price" placeholder="Enter price" className="field" />
                                                <ErrorMessage name="price" component="div" />
                                                <Field type="text" name="image" placeholder="Enter image" className="field" />
                                                <ErrorMessage name="image" component="div" />
                                                <button type="submit" disabled={isSubmitting}>
                                                    Submit
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                                <div className="table-wrapper">
                                    <Table striped bordered hover className="table">
                                        <thead>
                                            <tr>
                                                <td>Id</td>
                                                <td>Image</td>
                                                <td>Name</td>
                                                <td>Description</td>
                                                <td>Delete</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                !data.length ? (
                                                    <h1 style={{ textAlign: "center", margin: "20px 0" }}>Datada melumat yoxdur</h1>
                                                ) : (
                                                    data.map((item) => (
                                                        <tr key={item._id}>
                                                            <td>{item._id}</td>
                                                            <td><img src={item.image} style={{ width: "100px", height: "100px" }} /></td>
                                                            <td>{item.name}</td>
                                                            <td>{item.description}</td>
                                                            <td style={{ fontSize: "40px" }}><span
                                                            onClick={() => handleDelete(item)}><RiDeleteBin3Line /></span></td>
                                                        </tr>
                                                    ))
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>

                            </>
                        )
                    }

                </div>
            </>

        </>
    )
}