import prisma from "@/lib/prisma";
 
export default async function getUsers() {
    const allUsers = await prisma.User.findMany({
      take: 10,
    })
 
  return allUsers;
}