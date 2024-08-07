PGDMP         :    
            |            auto #   15.5 (Ubuntu 15.5-0ubuntu0.23.10.1) #   15.5 (Ubuntu 15.5-0ubuntu0.23.10.1) 6    a           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            b           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            c           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            d           1262    33078    auto    DATABASE     p   CREATE DATABASE auto WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'ru_RU.UTF-8';
    DROP DATABASE auto;
                dima    false            �            1259    33113    admin    TABLE     =  CREATE TABLE public.admin (
    admin_id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    email character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.admin;
       public         heap    dima    false            �            1259    33112    admin_admin_id_seq    SEQUENCE     �   CREATE SEQUENCE public.admin_admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.admin_admin_id_seq;
       public          dima    false    219            e           0    0    admin_admin_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.admin_admin_id_seq OWNED BY public.admin.admin_id;
          public          dima    false    218            �            1259    41343    call    TABLE     =  CREATE TABLE public.call (
    fedd_id integer NOT NULL,
    name character varying NOT NULL,
    phone character varying NOT NULL,
    date timestamp without time zone NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.call;
       public         heap    dima    false            �            1259    41342    call_fedd_id_seq    SEQUENCE     �   CREATE SEQUENCE public.call_fedd_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.call_fedd_id_seq;
       public          dima    false    227            f           0    0    call_fedd_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.call_fedd_id_seq OWNED BY public.call.fedd_id;
          public          dima    false    226            �            1259    33124    category    TABLE     �   CREATE TABLE public.category (
    category_id integer NOT NULL,
    title character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.category;
       public         heap    dima    false            �            1259    33123    category_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.category_category_id_seq;
       public          dima    false    221            g           0    0    category_category_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.category_category_id_seq OWNED BY public.category.category_id;
          public          dima    false    220            �            1259    33151    feedback    TABLE     :  CREATE TABLE public.feedback (
    fedd_id integer NOT NULL,
    name character varying NOT NULL,
    phone character varying NOT NULL,
    comment character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.feedback;
       public         heap    dima    false            �            1259    33150    feedback_fedd_id_seq    SEQUENCE     �   CREATE SEQUENCE public.feedback_fedd_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.feedback_fedd_id_seq;
       public          dima    false    225            h           0    0    feedback_fedd_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.feedback_fedd_id_seq OWNED BY public.feedback.fedd_id;
          public          dima    false    224            �            1259    33080    news    TABLE     9  CREATE TABLE public.news (
    news_id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    img character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.news;
       public         heap    dima    false            �            1259    33079    news_news_id_seq    SEQUENCE     �   CREATE SEQUENCE public.news_news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.news_news_id_seq;
       public          dima    false    215            i           0    0    news_news_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.news_news_id_seq OWNED BY public.news.news_id;
          public          dima    false    214            �            1259    33135    service    TABLE     H  CREATE TABLE public.service (
    service_id integer NOT NULL,
    title character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    category_id integer,
    img character varying NOT NULL,
    price integer NOT NULL
);
    DROP TABLE public.service;
       public         heap    dima    false            �            1259    33134    service_service_id_seq    SEQUENCE     �   CREATE SEQUENCE public.service_service_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.service_service_id_seq;
       public          dima    false    223            j           0    0    service_service_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.service_service_id_seq OWNED BY public.service.service_id;
          public          dima    false    222            �            1259    33102    work    TABLE     9  CREATE TABLE public.work (
    work_id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    img character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.work;
       public         heap    dima    false            �            1259    33101    work_work_id_seq    SEQUENCE     �   CREATE SEQUENCE public.work_work_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.work_work_id_seq;
       public          dima    false    217            k           0    0    work_work_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.work_work_id_seq OWNED BY public.work.work_id;
          public          dima    false    216            �           2604    33116    admin admin_id    DEFAULT     p   ALTER TABLE ONLY public.admin ALTER COLUMN admin_id SET DEFAULT nextval('public.admin_admin_id_seq'::regclass);
 =   ALTER TABLE public.admin ALTER COLUMN admin_id DROP DEFAULT;
       public          dima    false    219    218    219            �           2604    41346    call fedd_id    DEFAULT     l   ALTER TABLE ONLY public.call ALTER COLUMN fedd_id SET DEFAULT nextval('public.call_fedd_id_seq'::regclass);
 ;   ALTER TABLE public.call ALTER COLUMN fedd_id DROP DEFAULT;
       public          dima    false    226    227    227            �           2604    33127    category category_id    DEFAULT     |   ALTER TABLE ONLY public.category ALTER COLUMN category_id SET DEFAULT nextval('public.category_category_id_seq'::regclass);
 C   ALTER TABLE public.category ALTER COLUMN category_id DROP DEFAULT;
       public          dima    false    220    221    221            �           2604    33154    feedback fedd_id    DEFAULT     t   ALTER TABLE ONLY public.feedback ALTER COLUMN fedd_id SET DEFAULT nextval('public.feedback_fedd_id_seq'::regclass);
 ?   ALTER TABLE public.feedback ALTER COLUMN fedd_id DROP DEFAULT;
       public          dima    false    225    224    225            �           2604    33083    news news_id    DEFAULT     l   ALTER TABLE ONLY public.news ALTER COLUMN news_id SET DEFAULT nextval('public.news_news_id_seq'::regclass);
 ;   ALTER TABLE public.news ALTER COLUMN news_id DROP DEFAULT;
       public          dima    false    214    215    215            �           2604    33138    service service_id    DEFAULT     x   ALTER TABLE ONLY public.service ALTER COLUMN service_id SET DEFAULT nextval('public.service_service_id_seq'::regclass);
 A   ALTER TABLE public.service ALTER COLUMN service_id DROP DEFAULT;
       public          dima    false    223    222    223            �           2604    33105    work work_id    DEFAULT     l   ALTER TABLE ONLY public.work ALTER COLUMN work_id SET DEFAULT nextval('public.work_work_id_seq'::regclass);
 ;   ALTER TABLE public.work ALTER COLUMN work_id DROP DEFAULT;
       public          dima    false    217    216    217            V          0    33113    admin 
   TABLE DATA           ^   COPY public.admin (admin_id, username, password, email, "createdAt", "updatedAt") FROM stdin;
    public          dima    false    219   r?       ^          0    41343    call 
   TABLE DATA           T   COPY public.call (fedd_id, name, phone, date, "createdAt", "updatedAt") FROM stdin;
    public          dima    false    227   (@       X          0    33124    category 
   TABLE DATA           P   COPY public.category (category_id, title, "createdAt", "updatedAt") FROM stdin;
    public          dima    false    221   �@       \          0    33151    feedback 
   TABLE DATA           [   COPY public.feedback (fedd_id, name, phone, comment, "createdAt", "updatedAt") FROM stdin;
    public          dima    false    225   4A       R          0    33080    news 
   TABLE DATA           Z   COPY public.news (news_id, title, description, img, "createdAt", "updatedAt") FROM stdin;
    public          dima    false    215   0B       Z          0    33135    service 
   TABLE DATA           g   COPY public.service (service_id, title, "createdAt", "updatedAt", category_id, img, price) FROM stdin;
    public          dima    false    223   �C       T          0    33102    work 
   TABLE DATA           Z   COPY public.work (work_id, title, description, img, "createdAt", "updatedAt") FROM stdin;
    public          dima    false    217   wE       l           0    0    admin_admin_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.admin_admin_id_seq', 7, true);
          public          dima    false    218            m           0    0    call_fedd_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.call_fedd_id_seq', 1, true);
          public          dima    false    226            n           0    0    category_category_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.category_category_id_seq', 5, true);
          public          dima    false    220            o           0    0    feedback_fedd_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.feedback_fedd_id_seq', 7, true);
          public          dima    false    224            p           0    0    news_news_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.news_news_id_seq', 14, true);
          public          dima    false    214            q           0    0    service_service_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.service_service_id_seq', 6, true);
          public          dima    false    222            r           0    0    work_work_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.work_work_id_seq', 5, true);
          public          dima    false    216            �           2606    33122 $   admin PK_08603203f2c50664bda27b1ff89 
   CONSTRAINT     j   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT "PK_08603203f2c50664bda27b1ff89" PRIMARY KEY (admin_id);
 P   ALTER TABLE ONLY public.admin DROP CONSTRAINT "PK_08603203f2c50664bda27b1ff89";
       public            dima    false    219            �           2606    33089 #   news PK_313a1b4b0d8af7de07bfb46b6cb 
   CONSTRAINT     h   ALTER TABLE ONLY public.news
    ADD CONSTRAINT "PK_313a1b4b0d8af7de07bfb46b6cb" PRIMARY KEY (news_id);
 O   ALTER TABLE ONLY public.news DROP CONSTRAINT "PK_313a1b4b0d8af7de07bfb46b6cb";
       public            dima    false    215            �           2606    41352 #   call PK_399d57f840728e960dd6a26dcdd 
   CONSTRAINT     h   ALTER TABLE ONLY public.call
    ADD CONSTRAINT "PK_399d57f840728e960dd6a26dcdd" PRIMARY KEY (fedd_id);
 O   ALTER TABLE ONLY public.call DROP CONSTRAINT "PK_399d57f840728e960dd6a26dcdd";
       public            dima    false    227            �           2606    33144 &   service PK_48c5a0e13da2b2948fb7f3a0c4a 
   CONSTRAINT     n   ALTER TABLE ONLY public.service
    ADD CONSTRAINT "PK_48c5a0e13da2b2948fb7f3a0c4a" PRIMARY KEY (service_id);
 R   ALTER TABLE ONLY public.service DROP CONSTRAINT "PK_48c5a0e13da2b2948fb7f3a0c4a";
       public            dima    false    223            �           2606    33111 #   work PK_60d987a1eff0d704b76d64628f4 
   CONSTRAINT     h   ALTER TABLE ONLY public.work
    ADD CONSTRAINT "PK_60d987a1eff0d704b76d64628f4" PRIMARY KEY (work_id);
 O   ALTER TABLE ONLY public.work DROP CONSTRAINT "PK_60d987a1eff0d704b76d64628f4";
       public            dima    false    217            �           2606    33160 '   feedback PK_7be00dae619261b802b6a756636 
   CONSTRAINT     l   ALTER TABLE ONLY public.feedback
    ADD CONSTRAINT "PK_7be00dae619261b802b6a756636" PRIMARY KEY (fedd_id);
 S   ALTER TABLE ONLY public.feedback DROP CONSTRAINT "PK_7be00dae619261b802b6a756636";
       public            dima    false    225            �           2606    33133 '   category PK_cc7f32b7ab33c70b9e715afae84 
   CONSTRAINT     p   ALTER TABLE ONLY public.category
    ADD CONSTRAINT "PK_cc7f32b7ab33c70b9e715afae84" PRIMARY KEY (category_id);
 S   ALTER TABLE ONLY public.category DROP CONSTRAINT "PK_cc7f32b7ab33c70b9e715afae84";
       public            dima    false    221            �           2606    33145 &   service FK_9d513b39d251063f98f2a7b941d    FK CONSTRAINT     �   ALTER TABLE ONLY public.service
    ADD CONSTRAINT "FK_9d513b39d251063f98f2a7b941d" FOREIGN KEY (category_id) REFERENCES public.category(category_id);
 R   ALTER TABLE ONLY public.service DROP CONSTRAINT "FK_9d513b39d251063f98f2a7b941d";
       public          dima    false    223    3259    221            V   �   x�}��
�0  ����;�L7�
B��a]F�9�\�Z�}л>
�0j���N�p˃�<�"�K��WN�XU-��Ar`���V	gU6�z�ߟ���:i�XВm���t���=¢oJ�u�B�Z-v�KÕ�ր��C���.H��d��'(�ʹ���� �<6      ^   L   x�3�,��S�H-�K�����442615�4202�54�50T00�#��P�H��������@�������W� ���      X   �   x�����0D�v4k��u�B1��)7D��-�;���q���}�a�+�r��a�Аo8�H3sfr)�ʺ��ܰ�f��c)=�]5Vk9a�\��w��6u��l0�`�R3}�I��D�R�@�WE��S-���eI.x���͕�Q��đ�N��;k��'h^      \   �   x�}�=O�@�g߯Ȏz����1� V�HIi�i
��ߧ@�P��-yx���L�cW9�����þF+��`CRT��7N9q9�y�yjL��"R$�l�T���~�1R�	��n?�,��O(A�'.��0�L������"�3Y9���+� Toh*ZA�>������n:�M�t�ߚ����f;��̧n�$�ɛ&�\A.~�*�M�~��X.���5��TA��;����t@      R   �  x��Q;NA�gN�@�?��=B��70F ABҳ=��� ΰ�%Kv���r��7�Ͳr���;�z��r٦FPa�T@�tE4K�iF��t��6>�om��e��	ut6/����}�ܾtt�Ny@�:��ă��~"]R�%�ݧ��n�+����]��b[9+"� ��Rxt(FU5U�e1f
�(�� }�|͸7��
����B��1��o!��4� J�Za�5" �D�R�ƹ�yF�6���Օ/�W�\b���6[P����������d��"�K?�:�`=��p��ϡK���ex�+�XS��-���J����/������^���XY��.�PJc����T�(|բ�m,���R?熯ΗV�����1���q%�:?(�< ��       Z   �  x����NA��ݧ�2(��s�w;d��J�5� �����GqQ�!�R��U摸v�".�T)N1s�hΧ{U1>j�og"_���W����!�ȋ�,�c�a=��./D�f�Y| �|�?9��h�\q�_�·�J�DP^H[#�RVZ�5�����"���;�4�{бE=;�Z=�NJ�O�gI)K]�%����ϗ�i�g]s��Ⱥ���g6y?�Lqr���Ē؟MO����#mGӭ�*�h*��f��A��|�FBl��aP�7)���^wk�N�������^��6(��х����@�`!�GЖ��CH�5��<[�:ܰ\��)�K��{�tp(N;j�x��{BWr��9<J�z�]W�DU�@��_Y��Ĥb@p&r��-x��CKC
��P�c��UY�/�j*.      T   �  x��T�kQ>'�x��n�폼l(K�z�-؃���nh�"xkRjK�(z��]�4��_��9�"�B^f�}3�}߮(�w��Pm��)�8��'����*�ݲ�{��ʕe�`�K����EG�a�����K�f|��3���:����)�2��8�a���%��M�G�����7��Rɘ
�Mq}:�	�l�)��:�g �" ��D��(?���
�Z��t�T�4�� ��_��'������ � kƨԥK7���ꙏ)إ@�T��X��uZ�w�p�7�ЇWK������h_ң�|��f��*؏W�Q(���/�U�M,�m˞��(�l���e��%[���U<�tKғ�-����G��V�������x�̓�6l�a��q���x�دŇRk��1H ���x�'����z�6�K@�.ܣ��q���zL���sMm�a�+�X:�?cI���eL5�����5Ψ�}���O�U�#S?Uz��M{/�3z<;��<Ss֘�������-uK�y�����SJó�p�t� q<#�}?��B)�"O�r��M��Ǿ%Utr�ԫ��x�f�0���i6��6-��to��Zs��B�3y���L�T?]Cz��i���=� s�g�Y��dy��)�_���&k������إ������)"#��I(�@�B'OL�D3}[8��Hٔ�\����N�<R*>7���Ox�W�     