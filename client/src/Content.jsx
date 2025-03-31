import {useState, useEffect} from 'react';
import Button from './button';
import CategoryButton from './CategoryButton.jsx';
import CategoryBox from './CategoryBox.jsx';
import axios from 'axios';

function Content(){
    const [isDefault, setIsDefault] = useState(true);
    const [APICategories, setAPICategories] = useState([]);
    const [listCategories, setListCategories] = useState([]);
}