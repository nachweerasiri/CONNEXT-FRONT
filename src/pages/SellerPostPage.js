import DeletePost from "../assets/icons/DeletePost";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import VerticalSpace from "../components/VerticalSpace";
import { getPostbyId } from "../apis/post-api";
import { useParams, useNavigate } from "react-router-dom";
import EditPost from "../assets/icons/EditPost";
import Modal from "../components/Modal";

export default function SellerPostPage() {
  const [posts, setPosts] = useState({});
  // const [editDone, setEditDone] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    // Fetch the data from an API and update the state
    const fetchPostbyId = async () => {
      const result = await getPostbyId(params.postId);
      setPosts(result.data);
    };
    fetchPostbyId();
  }, []);

  const handleDelete = (postId) => {
    // Send a DELETE request to the API and update the state
    axios.delete(`/post/${postId}`).then(() => {
      // setPosts(posts.filter((post) => post.postId !== postId));
      setPosts({});
    });
  };

  const handleEdit = (postId) => {
    axios.patch(`/post/${postId}`).then(() => {
      setPosts({});
    });
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              handleEdit(posts.id);
              setIsEditOpen(true);
            }}
          >
            <EditPost />
          </button>
          <div className="flex" key={posts.id}>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>

            <button
              onClick={() => {
                handleDelete(posts.id);
                navigate(`/seller`);
              }}
            >
              <DeletePost />
            </button>
          </div>
        </div>
      </div>
      <form>
        <div className="flex flex-col gap-4">
          <div className="col-6">
            <Input
              placeholder="Topic"
              name="topic"
              value={posts.topic}
              // onChange={handleChangeInput}
            />
          </div>
          <div className="col-6">
            <Input
              placeholder="Price"
              name="price"
              value={posts.price}
              // onChange={handleChangeInput}
            />
          </div>
          <div className="col-6">
            <Input
              placeholder="Description"
              name="description"
              value={posts.description}
              // onChange={handleChangeInput}
            />
          </div>
          <div className="col-6">
            <Input
              placeholder="Contact"
              name="contact"
              value={posts.contact}
              // onChange={handleChangeInput}
            />
          </div>
        </div>
        <VerticalSpace />
        <div className="flex justify-center items-center gap-6">
          <img src={posts.posterImage} className="w-[50%]" />
        </div>
      </form>

      <div className="flex items-center bottom-8 px-7 fixed w-full z-40">
        <div className="flex grow justify-around bg-gradient-to-r from-[#460EA2] to-[#AE3A68] p-3 rounded-full">
          <div>
            <Link className="navbar-brand" to="/seeker">
              <button className="text-white font-semibold text-lg">Seeker</button>
            </Link>
          </div>
          <div>
            <Link className="navbar-brand" to="/seller">
              <button className="text-white font-semibold text-lg">Seller</button>
            </Link>
          </div>
        </div>
      </div>

      <Modal title="Edit Detail" isOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <form>
          <div className="flex flex-col gap-4">
            <div className="col-6">
              <Input
                placeholder="Topic"
                name="topic"
                value={posts.topic}
                // onChange={handleChangeInput}
              />
            </div>
            <div className="col-6">
              <Input
                placeholder="Price"
                name="price"
                value={posts.price}
                // onChange={handleChangeInput}
              />
            </div>
            <div className="col-6">
              <Input
                placeholder="Description"
                name="description"
                value={posts.description}
                // onChange={handleChangeInput}
              />
            </div>
            <div className="col-6">
              <Input
                placeholder="Contact"
                name="contact"
                value={posts.contact}
                // onChange={handleChangeInput}
              />
            </div>
          </div>
          <VerticalSpace />
          <div className="flex justify-center items-center gap-6">
            <img src={posts.posterImage} className="w-[50%]" />
          </div>
          <VerticalSpace />
          <div className="flex items-center px-7 w-full">
            <div className="flex grow justify-around bg-gradient-to-r from-[#460EA2] to-[#AE3A68] p-3 rounded-full">
              <button className="text-white font-semibold text-lg">Cancel</button>
              <button className="text-white font-semibold text-lg">Done</button>
            </div>
          </div>
          <VerticalSpace />
        </form>
      </Modal>
    </>
  );
}
