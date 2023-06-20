import * as yup from 'yup';

export const VALIDATION_SCHEMA = yup.object().shape({
    nickname: yup.string().min(1).max(30).required('Nickname required'),
    realName: yup.string().min(1).max(30),
    originDescription: yup.string().max(220),
    cathPhrase: yup.string().min(1).max(60),
    superpower: yup.string().min(1).max(220)
})



